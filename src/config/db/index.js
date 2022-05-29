const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/shopping_app');
        console.log('connect db succesfully')
    } catch (error) {
        console.log('connect db fail')
    }
}

module.exports = { connect }