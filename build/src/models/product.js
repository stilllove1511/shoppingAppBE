"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: String,
  image: String,
  cost: Number,
  description: String
});

var _default = mongoose.model('Product', productSchema, 'products');

exports["default"] = _default;