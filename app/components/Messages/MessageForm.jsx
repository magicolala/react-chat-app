import React, { Component } from 'react';

class MessageForm extends Component {
	render() {
		return (
			<div className="mt-4">
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" className="form-control" ref="text" placeholder="Type a message..." />
				</form>
			</div>
		);
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.emit('messageAdded', {
			timeStamp: Date.now(),
			text: this.refs.text.value.trim()
		});

		// Clear Form
		this.refs.text.value = '';
	}
}

export default MessageForm;
