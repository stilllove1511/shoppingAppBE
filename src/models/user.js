const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

export default mongoose.model('User', userSchema, 'users');