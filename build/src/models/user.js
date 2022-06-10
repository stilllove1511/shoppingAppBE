"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }
});

var _default = mongoose.model('User', userSchema, 'users');

exports["default"] = _default;