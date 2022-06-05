const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    url: String
})

export default mongoose.model('Role', roleSchema, 'roles');