"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
  name: String,
  description: String,
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }]
});

var _default = mongoose.model('Group', groupSchema, 'groups');

exports["default"] = _default;