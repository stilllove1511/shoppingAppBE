"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _accountService = _interopRequireDefault(require("../services/accountService"));

var _JWTAction = _interopRequireDefault(require("../middlewares/JWTAction"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var extractToken = function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};

var updatePassword = /*#__PURE__*/function () {
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
            decoded = _JWTAction["default"].verifyToken(token);
            console.log('check decode:', decoded);
            userId = decoded.id;
            _context.next = 9;
            return _accountService["default"].updatePassword(_objectSpread(_objectSpread({}, req.body), {}, {
              userId: userId
            }));

          case 9:
            data = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              EM: data.EM,
              EC: data.EC,
              DT: ''
            }));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              EM: 'error fom server',
              EC: '-1',
              DT: ''
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function updatePassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  updatePassword: updatePassword
};
exports["default"] = _default;