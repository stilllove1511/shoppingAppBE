"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number
});

var _default = mongoose.model('Order', orderSchema, 'orders');

exports["default"] = _default;