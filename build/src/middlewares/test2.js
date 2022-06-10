"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(req, res, next) {
  console.log('test2: ', req.passvar);
  next();
};

exports["default"] = _default;