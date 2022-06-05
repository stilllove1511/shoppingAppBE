const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: String,
    description: String,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    }
})

export default mongoose.model('Group', groupSchema, 'groups');