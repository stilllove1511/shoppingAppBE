"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _log = _interopRequireDefault(require("./log"));

var _order = _interopRequireDefault(require("./order"));

var _product = _interopRequireDefault(require("./product"));

var _user = _interopRequireDefault(require("./user"));

var _account = _interopRequireDefault(require("./account"));

var _test = _interopRequireDefault(require("../middlewares/test1"));

var _test2 = _interopRequireDefault(require("../middlewares/test2"));

var _index = _interopRequireDefault(require("../models/index"));

var initAppRoutes = function initAppRoutes(app) {
  app.use('/', _log["default"]);
  app.use('/order/', _order["default"]);
  app.use('/product/', _product["default"]);
  app.use('/user/', _user["default"]);
  app.use('/account/', _account["default"]);
  app.use('/test', _test["default"], _test2["default"], /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('controller: ', req.passvar);
              res.send('ok');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()); //     res.status(200).json({
  //         DT: data
  //     })
  // })
  // app.use('/cg', async (req, res) => {
  //     db.Group.create({
  //         name: 'ad'
  //     })
  // })
};

var _default = initAppRoutes;
exports["default"] = _default;