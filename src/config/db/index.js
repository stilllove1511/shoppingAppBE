const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://stilllove:1@cluster0.cvbjf.mongodb.net/?retryWrites=true&w=majority');
        console.log('connect db succesfully')
    } catch (error) {
        console.log('connect db fail')
    }
}

module.exports = { connect }