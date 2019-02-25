import React, { Component } from 'react';

class UserForm extends Component {
	render() {
		return (
			<div>
				<h3>Chat Login</h3>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" className="form-control" ref="name" placeholder="Choose a Username" />
				</form>
			</div>
		);
	}

	onSubmit(e) {
		e.preventDefault();

		const name = this.refs.name.value.trim();

		this.props.setUser({ name });
		this.props.emit('userJoined', { name });

		this.refs.name.value = '';
	}
}

export default UserForm;
