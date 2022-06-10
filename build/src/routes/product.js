"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productController = _interopRequireDefault(require("../controllers/productController"));

var _JWTAction = _interopRequireDefault(require("../middlewares/JWTAction"));

var productRouter = _express["default"].Router();

productRouter.post('/create', _JWTAction["default"].checkUserJWT, _JWTAction["default"].checkUserPermission, _productController["default"].create);
productRouter.get('/read', _productController["default"].read);
productRouter.put('/update', _JWTAction["default"].checkUserJWT, _JWTAction["default"].checkUserPermission, _productController["default"].update);
productRouter["delete"]('/destroy', _JWTAction["default"].checkUserJWT, _JWTAction["default"].checkUserPermission, _productController["default"].destroy);
var _default = productRouter;
exports["default"] = _default;