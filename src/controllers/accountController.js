import accountService from '../services/accountService'
import JWTAction from '../middlewares/JWTAction'

const extractToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }
    return null
}

const updatePassword = async (req, res) => {
    try {
        let cookies = req.cookies
        let tokenFromHeader = extractToken(req)
        let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader
        let decoded = JWTAction.verifyToken(token)
        console.log('check decode:', decoded)
        let userId = decoded.id

        let data = await accountService.updatePassword({
            ...req.body,
            userId: userId
        })

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ''
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error fom server',
            EC: '-1',
            DT: ''
        })
    }
}


export default { updatePassword }