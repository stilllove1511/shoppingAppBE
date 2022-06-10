"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _accountController = _interopRequireDefault(require("../controllers/accountController"));

var accountRouter = _express["default"].Router();

accountRouter.put('/update-password', _accountController["default"].updatePassword);
var _default = accountRouter;
exports["default"] = _default;