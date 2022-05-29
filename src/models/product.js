const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

const Product = mongoose.model('Product', userSchema, 'products');

module.exports = Product;