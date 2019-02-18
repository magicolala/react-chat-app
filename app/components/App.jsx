import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageList from './Messages/MessageList.jsx';
import MessageForm from './Messages/MessageForm.jsx';
import UserList from './Users/UserList.jsx';
import UserForm from './Users/UserForm.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'disconnected',
			messages: [{
				timeStamp: Date.now,
				text: "Welcome to SockChat"
			}],
			users: [],
			user: ''
		};
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect.bind(this));
		this.socket.on('messageAdded', this.onMessageAdded.bind(this));
	}

	connect() {
		this.setState({status: 'connected'});
		console.log('Connected: ' + this.socket.id);
	}

	onMessageAdded(message) {
		this.setState({messages: this.state.messages.concat(message)});
	}

	disconnect() {
		this.setState({status: 'disconnected'});
	}

	emit(eventName, payload) {
		this.socket.emit(eventName, payload);
	}

	render() {
		console.log(this.state.messages);   
		return (
			<div className="row">
				<div className="col-md-4">
					<UserList {...this.state} />
				</div>
				<div className="col-md-8">
					<MessageList {...this.state} />
					<MessageForm {...this.state} emit={this.emit.bind(this)} />
				</div>
			</div>
		);
	}
}

export default App;
