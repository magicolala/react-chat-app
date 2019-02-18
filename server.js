const express = require('express');

const app = express();

const connections = [];
const users = [];

app.use(express.static('./public'));

const server = app.listen(3000);
io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	socket.once('disconnect', function() {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id == this.id) {
				users.splice(i, 1);
			}
		}
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		io.emit('disconnect', users);
		console.log('Disconnected: %s sockets connected', connections.length);
	});

	socket.on('messageAdded', function(payload) {
		const newMessage = {
			timeStamp: payload.timeStamp,
			text: payload.text,
			user: payload.user
		};

		io.emit('messageAdded', newMessage);
	});

	socket.on('userJoined', function(payload) {
		const newUser = {
			id: this.id,
			name: payload.name
		};

		users.push(newUser);

		io.emit('userJoined', users);
		console.log(`User Joined: ${payload.name}`);
	});

	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);
});

console.log('Server is running on port 3000');
