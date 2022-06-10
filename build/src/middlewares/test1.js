"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(req, res, next) {
  req.passvar = 123321;
  console.log('test1: ', req.passvar);
  next();
};

exports["default"] = _default;