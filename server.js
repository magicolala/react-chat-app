var express = require('express');

var app = express();

var connections = [];
var users = [];

app.use(express.static('./public'));

var server = app.listen(3000);
io = require ('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);
});

console.log('Server is running on port 3000');
