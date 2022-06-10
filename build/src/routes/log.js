"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _logController = _interopRequireDefault(require("../controllers/logController"));

var logRouter = _express["default"].Router();

logRouter.post('/register', _logController["default"].handleRegister);
logRouter.post('/login', _logController["default"].handleLogin);
var _default = logRouter;
exports["default"] = _default;