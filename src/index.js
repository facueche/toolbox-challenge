const express = require("express");
const http = require("http");

const app = express();
const port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port);