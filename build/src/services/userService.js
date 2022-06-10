"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

var hashUserPassword = function hashUserPassword(userPassword) {
  var hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

var checkUsernameExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].findOne({
              username: username
            });

          case 2:
            user = _context.sent;

            if (!user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", true);

          case 5:
            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkUsernameExist(_x) {
    return _ref.apply(this, arguments);
  };
}();

var create = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userData) {
    var isUsernameExist, hashPassword;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return checkUsernameExist(userData.username);

          case 3:
            isUsernameExist = _context2.sent;

            if (!isUsernameExist) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", {
              EM: 'the email is already exist',
              EC: 1
            });

          case 6:
            hashPassword = hashUserPassword(userData.password);
            _context2.next = 9;
            return _user["default"].create({
              username: userData.username,
              password: hashPassword
            });

          case 9:
            return _context2.abrupt("return", {
              EM: 'create user successfully!!',
              EC: 0,
              DT: ''
            });

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", {
              EM: 'somtthing wrong in service!!',
              EC: -1,
              DT: ''
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function create(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var read = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var users;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _user["default"].find({}).select('-password -__v');

          case 3:
            users = _context3.sent;
            return _context3.abrupt("return", {
              EM: 'get user successfully!!',
              EC: 0,
              DT: users
            });

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", {
              EM: 'somtthing wrong in service!!',
              EC: -1,
              DR: ''
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function read() {
    return _ref3.apply(this, arguments);
  };
}();

var update = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userData) {
    var hashPassword;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            hashPassword = hashUserPassword(userData.password);
            _context4.prev = 1;
            _context4.next = 4;
            return _user["default"].updateOne({
              _id: userData._id
            }, {
              username: userData.username,
              password: hashPassword
            });

          case 4:
            return _context4.abrupt("return", {
              EM: 'update User successfully!',
              EC: 0,
              DT: ''
            });

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", {
              EM: 'something wrongs in service...',
              EC: -2
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));

  return function update(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var destroy = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user["default"].deleteOne({
              _id: userId
            });

          case 3:
            return _context5.abrupt("return", {
              EM: 'delete user successfully!!',
              EC: 0,
              DT: ''
            });

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            return _context5.abrupt("return", {
              EM: 'somtthing wrong in service!!',
              EC: -1,
              DR: ''
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function destroy(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  read: read,
  update: update,
  destroy: destroy
};
exports["default"] = _default;