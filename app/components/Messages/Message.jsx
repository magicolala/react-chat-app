import React, { Component } from 'react';

class Message extends Component {
	render() {
		const { message } = this.props;
		const formattedTime = this.formatTime(message.timeStamp);

		if (message.user == this.props.user.name) {
			return (
				<div className="message">
					<div className="small message-time-me text-right">{formattedTime}</div>
					<div className="message-text-me float-right">{message.text}</div>
				</div>
			);
		}
		return (
			<div className="message">
				<div className="row message-info">
					<div className="small message-time">{formattedTime}</div>&nbsp;
					<strong className="small message-user">{message.user}</strong>
				</div>
				<div className="message-text-other">{message.text}</div>
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
		return `${pad(hours)}:${pad(minutes)}`;
	}
}

export default Message;
