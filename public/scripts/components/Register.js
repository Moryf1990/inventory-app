import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<section className="register">
				<Nav />
				<h1>Inventory App</h1>
				<section className="registerSection">
					<h1>Register</h1>
					<div>First Name</div>
					<input/>
					<div>Last Name</div>
					<input/>
					<div>Email</div>
					<input/>
					<div>Password</div>
					<input/>
					<div>
						<button className="registerButton">Login</button>
					</div>
				</section>
			</section>
		);
	}
});