import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<section className="login">
				<Nav/>
				<h1>Inventory App</h1>
				<section className="loginSection">
					<h1>Login</h1>
					<div>Email</div>
					<input/>
					<div>Password</div>
					<input/>
					<div>
						<button className="loginButton">Login</button>
					</div>
				</section>
			</section>
		);
	}
});