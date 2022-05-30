import productService from '../services/productService'

const create = async (req, res) => {
    try {
        let data = await productService.create(req.body)

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

const read = async (req, res) => {
    try {
        let data = await productService.read()
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
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

const update = async (req, res) => {
    try {
        let data = await productService.update(req.body)

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

const destroy = async (req, res) => {
    try {
        let data = await productService.destroy(req.body._id)

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


export default { create, read, update, destroy }