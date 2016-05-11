import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		console.log('home render')
		return (
			<section className="home">
				<h1 className="inventoryApp">Inventory App</h1>
				<h2 className="inventoryHeader">Welcome to Inventory App</h2>
				<h3 className="inventoryText">You must login before accessing the system</h3>
				
				<button className="homeLogin"><a href="/login" className="text">Login</a></button>
				<button className="homeRegister"><a href = "/register" className="text">Register</a></button>
			</section>
		);
	}
});