var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var socket = require('./src/socketControl')(io);

server.listen(3000, function(){
  console.log("Listening")
});

