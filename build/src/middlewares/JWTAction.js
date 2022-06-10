"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jwtService = _interopRequireDefault(require("../services/jwtService"));

require('dotenv').config();

var _require = require('express/lib/response'),
    cookie = _require.cookie;

var jwt = require('jsonwebtoken');

var createJWT = function createJWT(payload) {
  var key = process.env.JWT_SECRET;
  var token = null;

  try {
    token = jwt.sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  } catch (err) {
    console.log(err);
  }

  return token;
};

var verifyToken = function verifyToken(token) {
  var key = process.env.JWT_SECRET;
  var decoded = null;

  try {
    decoded = jwt.verify(token, key);
  } catch (err) {
    console.log(err);
  }

  return decoded;
};

var extractToken = function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};

var checkUserJWT = function checkUserJWT(req, res, next) {
  var cookies = req.cookies;
  var tokenFromHeader = extractToken(req); // console.log('>>> check cookies: ', cookies.jwt)
  // console.log('>>> check bearer token: ', tokenFromHeader)

  if (cookies && cookies.jwt || tokenFromHeader) {
    var token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader; // console.log('>>> check token: ', token)

    if (token) {
      var decoded = verifyToken(token);

      if (decoded) {
        req.user = decoded;
        req.token = token;
        next();
      } else {
        return res.status(401).json({
          EC: -1,
          DT: '',
          EM: 'Not authenticated the user'
        });
      }
    } else {
      return res.status(401).json({
        EC: -1,
        DT: '',
        EM: 'Not authenticated the user'
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: '',
      EM: 'Not authenticated the user'
    });
  }
};

var checkUserPermission = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var cookies, tokenFromHeader, token, decoded, userId, getRolesReuturn, roles, currentUrl, canAccess;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookies = req.cookies;
            tokenFromHeader = extractToken(req);
            token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;

            if (!token) {
              _context.next = 21;
              break;
            }

            decoded = verifyToken(token);
            userId = decoded.id;
            _context.next = 8;
            return _jwtService["default"].getRoles(userId);

          case 8:
            getRolesReuturn = _context.sent;
            roles = getRolesReuturn.DT;
            currentUrl = req.originalUrl;

            if (!(!roles || roles.length === 0)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              EC: -1,
              DT: '',
              EM: 'You dont have permisson to this resource'
            }));

          case 13:
            canAccess = roles.some(function (item) {
              return item.url === currentUrl;
            });

            if (!canAccess) {
              _context.next = 18;
              break;
            }

            next();
            _context.next = 19;
            break;

          case 18:
            return _context.abrupt("return", res.status(403).json({
              EC: -1,
              DT: '',
              EM: 'You dont have permisson to this resource'
            }));

          case 19:
            _context.next = 22;
            break;

          case 21:
            return _context.abrupt("return", res.status(403).json({
              EC: -1,
              DT: '',
              EM: 'untoken'
            }));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkUserPermission(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  createJWT: createJWT,
  verifyToken: verifyToken,
  checkUserJWT: checkUserJWT,
  checkUserPermission: checkUserPermission
};
exports["default"] = _default;