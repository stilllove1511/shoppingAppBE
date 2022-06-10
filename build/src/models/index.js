"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _group = _interopRequireDefault(require("./group"));

var _order = _interopRequireDefault(require("./order"));

var _product = _interopRequireDefault(require("./product"));

var _role = _interopRequireDefault(require("./role"));

var _user = _interopRequireDefault(require("./user"));

var _default = {
  Group: _group["default"],
  Order: _order["default"],
  Product: _product["default"],
  Role: _role["default"],
  User: _user["default"]
};
exports["default"] = _default;