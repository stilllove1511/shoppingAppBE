import orderService from "../services/orderService"

const create = async (req, res) => {
    try {
        let data = await orderService.create({ ...req.body, user: req.user.id })
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
        let data = await orderService.read(req.user.id)
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
        let orderId = req.body._id
        let data = await orderService.destroy({ orderId: orderId, userId: req.user.id })
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