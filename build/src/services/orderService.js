"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _order = _interopRequireDefault(require("../models/order"));

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(orderData) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _order["default"].create(orderData);

          case 3:
            return _context.abrupt("return", {
              EM: 'create order successfully!!',
              EC: 0,
              DT: ''
            });

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", {
              EM: 'somtthing wrong in service!!',
              EC: -1,
              DR: ''
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function create(_x) {
    return _ref.apply(this, arguments);
  };
}();

var read = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    var orders;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _order["default"].find({
              user: userId
            }).populate('product', '-__v');

          case 3:
            orders = _context2.sent;
            return _context2.abrupt("return", {
              EM: 'get order successfully!!',
              EC: 0,
              DT: orders
            });

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", {
              EM: 'somtthing wrong in service!!',
              EC: -1,
              DR: ''
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function read(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var destroy = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ids) {
    var order;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _order["default"].findOne({
              _id: ids.orderId
            });

          case 3:
            order = _context3.sent;

            if (!order) {
              _context3.next = 12;
              break;
            }

            if (!(order.user.toString() !== '' + ids.userId)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", {
              EM: 'you do not have permission to perfrom this action',
              EC: -2,
              DT: []
            });

          case 7:
            _context3.next = 9;
            return order["delete"]();

          case 9:
            return _context3.abrupt("return", {
              EM: 'Deleted',
              EC: 0,
              DT: []
            });

          case 12:
            return _context3.abrupt("return", {
              EM: 'order does not exist',
              EC: 2,
              DT: []
            });

          case 13:
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", {
              EM: 'somtthing wrong in service!!',
              EC: -1,
              DR: ''
            });

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));

  return function destroy(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  read: read,
  destroy: destroy
};
exports["default"] = _default;