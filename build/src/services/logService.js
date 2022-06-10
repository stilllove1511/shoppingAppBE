"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _JWTAction = _interopRequireDefault(require("../middlewares/JWTAction"));

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

var register = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(rawUserData) {
    var isUsernameExist, hashPassword;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return checkUsernameExist(rawUserData.username);

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
            //hash user password
            hashPassword = hashUserPassword(rawUserData.password); //create new user

            _context2.next = 9;
            return _user["default"].create({
              username: rawUserData.username,
              password: hashPassword
            });

          case 9:
            return _context2.abrupt("return", {
              EM: 'A user is created successfully',
              EC: 0
            });

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", {
              EM: 'something wrongs in service...',
              EC: -2
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function register(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var checkPassword = function checkPassword(inputPassword, hashPassword) {
  return bcrypt.compareSync(inputPassword, hashPassword);
};

var login = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(rawData) {
    var user, isCorrectPassword, payload, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _user["default"].findOne({
              username: rawData.username
            });

          case 3:
            user = _context3.sent;

            if (!user) {
              _context3.next = 10;
              break;
            }

            isCorrectPassword = checkPassword(rawData.password, user.password);

            if (!isCorrectPassword) {
              _context3.next = 10;
              break;
            }

            payload = {
              _id: user.id,
              id: user.id,
              username: user.username
            };
            token = _JWTAction["default"].createJWT(payload);
            return _context3.abrupt("return", {
              EM: 'ok!',
              EC: 0,
              DT: {
                access_token: token,
                username: user.username
              }
            });

          case 10:
            console.log(">>> Input user with username: ", rawData.username, "password: ", rawData.password);
            return _context3.abrupt("return", {
              EM: 'your username or password is not correct',
              EC: 1,
              DT: ''
            });

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", {
              EM: 'something wrongs in service...',
              EC: -2
            });

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function login(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  register: register,
  login: login
};
exports["default"] = _default;