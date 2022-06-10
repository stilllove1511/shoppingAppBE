"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

var _db = _interopRequireDefault(require("./config/db"));

require('dotenv').config();

var app = (0, _express["default"])();
var hostname = process.env.HOST_NAME;
var PORT = process.env.PORT || 8080;

_db["default"].connect();

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
(0, _index["default"])(app);
app.use(function (req, res) {
  return res.send('nham api roi :(');
});
app.listen(PORT, hostname, function () {
  console.log("Server is running on site ".concat(hostname, ":").concat(PORT));
});