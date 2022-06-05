import User from '../models/user'

const create = async (userData) => {
    try {
        await User.create(userData)
        return {
            EM: 'create user successfully!!',
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
        let users = await User.find({})
        return {
            EM: 'get user successfully!!',
            EC: 0,
            DT: users
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

const update = async (userData) => {
    try {
        await User.updateOne({ _id: userData._id }, userData)
        return {
            EM: 'update User successfully!',
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

const destroy = async (userId) => {
    try {
        await User.deleteOne({ _id: userId })
        return {
            EM: 'delete user successfully!!',
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

export default { create, read, update, destroy }