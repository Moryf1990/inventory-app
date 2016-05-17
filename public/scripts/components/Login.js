import React from 'react';
import Nav from './Navigation.js';
import $ from 'jquery';
import user from '../models/UserModel.js';
import {browserHistory} from 'react-router';

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
				<h1 className="inventoryApp">Inventory App</h1>
				<section className="loginSection">
					<form onSubmit={this.login}>
						<h1 className="loginHeaders">Login</h1>
						<div className="loginHeaders">Email</div>
						<input ref="email"/>
						<div className="loginHeaders">Password</div>
						<input ref="password" type="password"/>
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