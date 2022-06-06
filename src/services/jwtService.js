import db from '../models/index'
const getRoles = async (userId) => {
    try {

        let user = await db.User.findOne({
            _id: userId
        }).populate('group')

        let group = await db.Group.findOne({
            _id: user.group._id
        }, '-__v').populate('roles', '-__v')

        let roles = group.roles
        return {
            EM: 'got roles',
            EC: 0,
            DT: roles ? roles : {}
        }

    } catch (error) {
        console.log(error)
        return ({
            EM: 'some thing wrong in jwt service',
            EC: 1,
            DT: ''
        })
    }
}

export default {
    getRoles,
};