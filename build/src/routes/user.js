"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _JWTAction = _interopRequireDefault(require("../middlewares/JWTAction"));

var userRouter = _express["default"].Router();

userRouter.post('/create', _JWTAction["default"].checkUserJWT, _JWTAction["default"].checkUserPermission, _userController["default"].create);
userRouter.get('/read', _JWTAction["default"].checkUserJWT, _JWTAction["default"].checkUserPermission, _userController["default"].read);
userRouter.put('/update', _JWTAction["default"].checkUserJWT, _JWTAction["default"].checkUserPermission, _userController["default"].update);
userRouter["delete"]('/destroy', _JWTAction["default"].checkUserJWT, _JWTAction["default"].checkUserPermission, _userController["default"].destroy);
var _default = userRouter;
exports["default"] = _default;