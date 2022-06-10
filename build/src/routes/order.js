"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _orderController = _interopRequireDefault(require("../controllers/orderController"));

var _JWTAction = _interopRequireDefault(require("../middlewares/JWTAction"));

var orderRouter = _express["default"].Router();

orderRouter.get('/read', _JWTAction["default"].checkUserJWT, _orderController["default"].read);
orderRouter.post('/create', _JWTAction["default"].checkUserJWT, _orderController["default"].create);
orderRouter["delete"]('/destroy', _JWTAction["default"].checkUserJWT, _orderController["default"].destroy);
var _default = orderRouter;
exports["default"] = _default;