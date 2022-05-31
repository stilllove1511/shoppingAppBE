import Order from '../models/order'

const create = async (orderData) => {
    try {
        await Order.create(orderData)
        return {
            EM: 'create order successfully!!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'somtthing wrong in service!!',
            EC: -1,
            DR: ''
        }
    }
}

const read = async () => {
    try {
        let orders = await Order.find({}).populate('product', '-__v')
        return {
            EM: 'get order successfully!!',
            EC: 0,
            DT: orders
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'somtthing wrong in service!!',
            EC: -1,
            DR: ''
        }
    }
}

const destroy = async (orderId) => {
    try {
        await Order.deleteOne({ _id: orderId })
        return {
            EM: 'delete order successfully!!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'somtthing wrong in service!!',
            EC: -1,
            DR: ''
        }
    }
}

export default { create, read, destroy }