var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(5000, function(){
  console.log("Listening")
});

io.sockets.on('connection', function (socket) {

  console.log("A connection");

  socket.on('connection name',function(user){
    io.sockets.emit('new user', user.name + " has joined.");
  });
});

