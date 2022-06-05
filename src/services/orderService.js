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

const read = async (userId) => {
    try {
        let orders = await Order.find({user:userId}).populate('product', '-__v')
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

const destroy = async (ids) => {
    try {
        let order = await Order.findOne({ _id: ids.orderId })
        if(order){
            if (order.user.toString() !== ''+ids.userId)
                return {
                    EM: 'you do not have permission to perfrom this action',
                    EC: -2,
                    DT: []
                }

            await order.delete()
            return {
                EM: 'Deleted',
                EC: 0,
                DT: []
            }
        }  else {
            return {
                EM: 'order does not exist',
                EC: 2,
                DT: []
            }
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