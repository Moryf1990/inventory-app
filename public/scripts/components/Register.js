import React from 'react';
import Nav from './Navigation.js';
import user from '../models/UserModel.js';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},
	render: function() {
		return (
			<section className="register">
				<Nav />
				<h1>Inventory App</h1>
				<section className="registerSection">
					<form onSubmit={this.register}>
						<h1>Register</h1>
						<div>First Name</div>
						<input ref="firstName"/>
						<div>Last Name</div>
						<input ref="lastName"/>
						<div>Email</div>
						<input ref="email"/>
						<div>Password</div>
						<input ref="password"/>
						<div>
							<button className="registerButton">Login</button>
						</div>
					</form>
				</section>
			</section>
		);
	},

	register: function(e) {
		e.preventDefault();
		$.ajax({
			url: 'auth/register',
			type: 'POST',
			data: {
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			success: (loggedIn) => {
				this.state.user.set(loggedIn);
			},
			error: (error) => {
				this.setState({errors: error.responseJSON});
			}
		});
	}
});