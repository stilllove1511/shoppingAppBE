require('dotenv').config()
const { cookie } = require('express/lib/response')
const jwt = require('jsonwebtoken')
import jwtService from '../services/jwtService'

const createJWT = (payload) => {
    let key = process.env.JWT_SECRET
    let token = null
    try {
        token = jwt.sign(payload, key, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
    } catch (err) {
        console.log(err)
    }

    return token;
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET
    let decoded = null

    try {
        decoded = jwt.verify(token, key)
    } catch (err) {
        console.log(err)
    }
    return decoded
}

const extractToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }
    return null
}

const checkUserJWT = (req, res, next) => {
    let cookies = req.cookies
    let tokenFromHeader = extractToken(req)

    // console.log('>>> check cookies: ', cookies.jwt)
    // console.log('>>> check bearer token: ', tokenFromHeader)

    if (cookies && cookies.jwt || tokenFromHeader) {
        let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader
        // console.log('>>> check token: ', token)

        if (token) {
            let decoded = verifyToken(token)
            if (decoded) {
                req.user = decoded
                req.token = token
                next()
            } else {
                return res.status(401).json({
                    EC: -1,
                    DT: '',
                    EM: 'Not authenticated the user'
                })

            }
        } else {
            return res.status(401).json({
                EC: -1,
                DT: '',
                EM: 'Not authenticated the user'
            })
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }
}

const checkUserPermission = async (req, res, next) => {
    let getRolesReuturn = await jwtService.getRoles(req.user.id)
    let roles = getRolesReuturn.DT
    let currentUrl = req.originalUrl
    if (!roles || roles.length === 0) {
        return res.status(403).json({
            EC: -1,
            DT: '',
            EM: 'You dont have permisson to this resource'
        })
    }


    let canAccess = roles.some(item => item.url === currentUrl)
    if (canAccess) {
        next()
    } else {
        return res.status(403).json({
            EC: -1,
            DT: '',
            EM: 'You dont have permisson to this resource'
        })
    }

}

export default {
    createJWT, verifyToken, checkUserJWT, checkUserPermission
}