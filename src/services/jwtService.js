import Group from '../models/group'
const getGroupWithRoles = async (groupId) => {
    try {
        let roles = await Group.findOne({id:groupId}).populate('roles')
        return res.status(200).json({
            EM:'get roles successfully',
            EC:0,
            DT:roles ? roles : {}
        })
            
    } catch (error) {
        console.log(error)
        return({
            EM:'some thing wrong in jwt service',
            EC:1,
            DT:''
        })
    }
}

export default {
    getGroupWithRoles,
};