const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

export default mongoose.model('Product', productSchema, 'products');