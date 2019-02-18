import React, { Component } from 'react';

class Message extends Component {
	render() {
		const { message } = this.props;
		const formattedTime = this.formatTime(message.timeStamp);
		return (
			<div className="message">
				<strong>{message.user}</strong> {formattedTime} - {message.text}
			</div>
		);
	}

	formatTime(timestamp) {
		function pad(num) {
			return `0${num}`.slice(-2);
		}
		const date = new Date(timestamp);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
	}
}

export default Message;
