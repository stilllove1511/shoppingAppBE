const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }
});

export default mongoose.model('User', userSchema, 'users');