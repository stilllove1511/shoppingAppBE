import orderService from "../services/orderService"

const create = async (req, res) => {
    try {
        let data = await orderService.create(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong from server!!',
            EC: -1,
            DR: ''
        }
    }
}

const read = async (req, res) => {
    try {
        let data = await orderService.read()
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong from server!!',
            EC: -1,
            DR: ''
        }
    }
}

const destroy = async (req, res) => {
    try {
        let data = await orderService.destroy(req.body._id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong from server!!',
            EC: -1,
            DR: ''
        }
    }
}

export default { create, read, destroy }