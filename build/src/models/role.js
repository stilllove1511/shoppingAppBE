"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var _default = mongoose.model('Role', new mongoose.Schema({
  url: String
}), 'roles');

exports["default"] = _default;