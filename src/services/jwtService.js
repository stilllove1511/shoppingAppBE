import Group from '../models/group'
const getGroupWithRoles = async (req, res) => {


        let roles = await Group.findOne({id:'629ccd4c2bd2c987e34d28c5'}).populate('role')
        return res.status(200).json({DT:roles ? roles : {}})
        
    
}

export default {
    getGroupWithRoles,
};