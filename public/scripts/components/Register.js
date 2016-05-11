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
				<h1 className="inventoryApp">Inventory App</h1>
				<section className="registerSection">
					<form onSubmit={this.register}>
						<h1 className="registerHeaders">Register</h1>
						<div className="registerHeaders">First Name</div>
						<input ref="firstName"/>
						<div className="registerHeaders">Last Name</div>
						<input ref="lastName"/>
						<div className="registerHeaders">Email</div>
						<input ref="email"/>
						<div className="registerHeaders">Password</div>
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