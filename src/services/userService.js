import User from '../models/user'
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword
}

const checkUsernameExist = async (username) => {
    let user = await User.findOne({
        username: username
    })

    if (user) {
        return true
    }
    return false
}



const create = async (userData) => {
    try {
        let isUsernameExist = await checkUsernameExist(userData.username)

        if (isUsernameExist) {
            return {
                EM: 'the email is already exist',
                EC: 1
            }
        }

        let hashPassword = hashUserPassword(userData.password)

        await User.create({
            username: userData.username,
            password: hashPassword,
        })
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
            DT: ''
        }
    }
}

const read = async () => {
    try {
        let users = await User.find({}).select('-password -__v')
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
    let hashPassword = hashUserPassword(userData.password)
    try {
        await User.updateOne({ _id: userData._id }, {
            username: userData.username,
            password: hashPassword,
        })
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