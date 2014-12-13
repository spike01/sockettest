var socket = function(io){

  io.sockets.on('connection', function (socket) {

    console.log('A connection');

    socket.on('connection name',function(user){
      io.sockets.emit('new user', user.name + " has joined.");
    });
  });

};

module.exports = socket;
