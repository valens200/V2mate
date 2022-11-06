var http = require("http");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 5000;


app.liste(PORT, function () {
  console.log("server is running on http://localhost:".concat(PORT));
});
