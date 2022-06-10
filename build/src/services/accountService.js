"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("../models/index"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var salt = _bcryptjs["default"].genSaltSync(10);

var hashUserPassword = function hashUserPassword(userPassword) {
  var hashPassword = _bcryptjs["default"].hashSync(userPassword, salt);

  return hashPassword;
};

var updatePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userData) {
    var hashPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hashPassword = hashUserPassword(userData.password);
            _context.prev = 1;
            _context.next = 4;
            return _index["default"].User.updateOne({
              _id: userData.userId
            }, {
              password: hashPassword
            });

          case 4:
            return _context.abrupt("return", {
              EM: 'update password successfully!',
              EC: 0,
              DT: ''
            });

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", {
              EM: 'something wrongs in service...',
              EC: -2
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function updatePassword(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  updatePassword: updatePassword
};
exports["default"] = _default;