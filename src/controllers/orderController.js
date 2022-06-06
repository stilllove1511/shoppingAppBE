import orderService from "../services/orderService"
import { verifyToken } from '../middlewares/JWTAction'


const extractToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }
    return null
}


const create = async (req, res) => {

    try {
        let cookies = req.cookies
        let tokenFromHeader = extractToken(req)
        let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader
        let decoded = verifyToken(token)
        console.log(decoded)
        let userId = decoded.id

        let data = await orderService.create({ ...req.body, user: userId })
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'something wrong from server!!',
            EC: -1,
            DR: ''
        })
    }
}

const read = async (req, res) => {
    try {
        let cookies = req.cookies
        let tokenFromHeader = extractToken(req)
        let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader
        let decoded = verifyToken(token)
        console.log(decoded)
        let userId = decoded.id

        let data = await orderService.read(userId)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'something wrong from server!!',
            EC: -1,
            DR: ''
        })
    }
}

const destroy = async (req, res) => {
    try {
        let cookies = req.cookies
        let tokenFromHeader = extractToken(req)
        let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader
        let decoded = verifyToken(token)
        console.log(decoded)
        let userId = decoded.id
        let orderId = req.body._id

        let data = await orderService.destroy({ orderId: orderId, userId: userId })
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'something wrong from server!!',
            EC: -1,
            DR: ''
        })
    }
}

export default { create, read, destroy }