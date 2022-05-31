const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number
})

const Order = mongoose.model('Order', orderSchema, 'orders');

export default Order;