import React from 'react';
import Nav from './Navigation.js';
import $ from 'jquery';
import user from '../models/UserModel.js';
import {browserHistory, } from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},
	render: function() {
		return (
			<section className="login">
				<Nav/>
				<h1>Inventory App</h1>
				<section className="loginSection">
					<form onSubmit={this.login}>
						<h1>Login</h1>
						<div>Email</div>
						<input ref="email"/>
						<div>Password</div>
						<input ref="password"/>
						<div>
							<button className="loginButton">Login</button>
						</div>
					</form>
				</section>
			</section>
		);
	},

	login: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			success: (login) => {
				browserHistory.push('/');
				user.set(login);
			},
			error: (error) => {
				this.setState({errors: error.responseJSON});
			}
		});
	}	
});