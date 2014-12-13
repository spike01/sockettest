var io = require('socket.io-client');

var socketURL = 'http://0.0.0.0:3000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var chatUser1 = {'name':'Mihai'};
var chatUser2 = {'name':'Spike'};
var chatUser3 = {'name':'Roi'};

describe("Chat Server",function(){

  it('Should broadcast new user to all users', function(done){
    var client1 = io.connect(socketURL, options);

    client1.on('connect', function(data){

      client1.emit('connection name', chatUser1);

      /* Since first client is connected, we connect
         the second client. */
      var client2 = io.connect(socketURL, options);

      client2.on('connect', function(data){
        client2.emit('connection name', chatUser2);
      });

      client2.on('new user', function(usersName){
        expect(usersName).toEqual(chatUser2.name + " has joined.");
        client2.disconnect();
        done();
      });

    });

    var numUsers = 0;
    client1.on('new user', function(usersName){
      numUsers += 1;

      if(numUsers === 2){
        expect(usersName).toEqual(chatUser2.name + " has joined.");
        client1.disconnect();
      }
    });
  });
});
