"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("../models/index"));

var getRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var user, group, roles;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].User.findOne({
              _id: userId
            }).populate('group');

          case 3:
            user = _context.sent;
            _context.next = 6;
            return _index["default"].Group.findOne({
              _id: user.group._id
            }, '-__v').populate('roles', '-__v');

          case 6:
            group = _context.sent;
            roles = group.roles;
            return _context.abrupt("return", {
              EM: 'got roles',
              EC: 0,
              DT: roles ? roles : {}
            });

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", {
              EM: 'some thing wrong in jwt service',
              EC: 1,
              DT: ''
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getRoles(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  getRoles: getRoles
};
exports["default"] = _default;