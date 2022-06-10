"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _logService = _interopRequireDefault(require("../services/logService"));

var handleRegister = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(!req.body.username || !req.body.password)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              EM: 'MIssing required parameters',
              //error message
              EC: '1',
              //error code
              DT: '' //data

            }));

          case 3:
            _context.next = 5;
            return _logService["default"].register(req.body);

          case 5:
            data = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              EM: data.EM,
              EC: data.EC,
              DT: ''
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              EM: 'error fom server',
              EC: '-1',
              DT: ''
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function handleRegister(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var handleLogin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _logService["default"].login(req.body);

          case 3:
            data = _context2.sent;

            //set cookie
            if (data && data.DT && data.DT.access_token) {
              res.cookie('jwt', data.DT.access_token, {
                httpOnly: false,
                maxAge: 3600 * 1000
              });
            }

            console.log('access_token: ', data.DT.access_token);
            return _context2.abrupt("return", res.status(200).json({
              EM: data.EM,
              //error message
              EC: data.EC,
              //error code
              DT: data.DT //data

            }));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).json({
              EM: 'error from server',
              EC: '-1',
              DT: ''
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function handleLogin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  handleRegister: handleRegister,
  handleLogin: handleLogin
};
exports["default"] = _default;