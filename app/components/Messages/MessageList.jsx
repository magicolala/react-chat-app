import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card card-body bg-light">
				<h3>Messages</h3>
				{this.props.messages.map((message, i) => {
					return <Message message={message} key={i} user={this.props.user} />;
				})}
			</div>
		);
	}
}

export default MessageList;
