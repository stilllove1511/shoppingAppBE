import Product from "../models/product"

const create = async (productData) => {
    try {
        await Product.create(productData)
        return {
            EM: 'create product successfully',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs in service...',
            EC: -2
        }
    }
}

const read = async () => {
    try {
        let products = await Product.find({})
        return {
            EM: 'get products successfully',
            EC: 0,
            DT: products
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs in service...',
            EC: -2
        }
    }
}

const update = async (productData) => {
    try {
        await Product.updateOne({ _id: productData._id }, productData)
        return {
            EM: 'update product successfully!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs in service...',
            EC: -2
        }
    }
}

const destroy = async (productId) => {
    try {
        await Product.deleteOne({ _id: productId })
        return {
            EM: 'delete product successfully!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs in service...',
            EC: -2
        }
    }
}


export default { create, read, update, destroy }