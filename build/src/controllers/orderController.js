"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _orderService = _interopRequireDefault(require("../services/orderService"));

var _JWTAction = _interopRequireDefault(require("../middlewares/JWTAction"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var extractToken = function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var cookies, tokenFromHeader, token, decoded, userId, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            cookies = req.cookies;
            tokenFromHeader = extractToken(req);
            token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;
            decoded = verifyToken(token);
            console.log(decoded);
            userId = decoded.id;
            _context.next = 9;
            return _orderService["default"].create(_objectSpread(_objectSpread({}, req.body), {}, {
              user: userId
            }));

          case 9:
            data = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              EM: data.EM,
              EC: data.EC,
              DT: data.DT
            }));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              EM: 'something wrong from server!!',
              EC: -1,
              DR: ''
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var read = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var cookies, tokenFromHeader, token, decoded, userId, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            cookies = req.cookies;
            tokenFromHeader = extractToken(req);
            token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;
            decoded = _JWTAction["default"].verifyToken(token);
            console.log(decoded);
            userId = decoded.id;
            _context2.next = 9;
            return _orderService["default"].read(userId);

          case 9:
            data = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              EM: data.EM,
              EC: data.EC,
              DT: data.DT
            }));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).json({
              EM: 'something wrong from server!!',
              EC: -1,
              DR: ''
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function read(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var destroy = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var cookies, tokenFromHeader, token, decoded, userId, orderId, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            cookies = req.cookies;
            tokenFromHeader = extractToken(req);
            token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;
            decoded = verifyToken(token);
            console.log(decoded);
            userId = decoded.id;
            orderId = req.body._id;
            _context3.next = 10;
            return _orderService["default"].destroy({
              orderId: orderId,
              userId: userId
            });

          case 10:
            data = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              EM: data.EM,
              EC: data.EC,
              DT: data.DT
            }));

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(500).json({
              EM: 'something wrong from server!!',
              EC: -1,
              DR: ''
            }));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function destroy(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  read: read,
  destroy: destroy
};
exports["default"] = _default;