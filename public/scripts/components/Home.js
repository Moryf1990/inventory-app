import React from 'react';
import user from '../models/UserModel.js';
import ProductCollection from '../collections/product.js';

export default React.createClass({
	// componentWillMount: function() {
	// 	// console.log('nav compnent will mount, window user', window.user);
	// 	user.on('change', () => {
	// 		if(user.get('id')) {
	// 			this.setState({loggedIn: true});
	// 		}
	// 		else {
	// 			this.setState({loggedIn: false});
	// 		}
	// 	});
	// 	user.set(window.user);
	// },
	// getInitialState: function() {
	// 	return {loggedIn: false};
	// },
	render: function() {
		if(user.get('id')) {
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
		else {
			return (
				<section className="home">
					<h1 className="inventoryApp">Hello World</h1>
					<h2 className="inventoryHeader">Welcome to Inventory App</h2>
					<h3 className="inventoryText">You must login before accessing the system</h3>
					
					<button className="homeLogin"><a href="/login" className="text">Login</a></button>
					<button className="homeRegister"><a href = "/register" className="text">Register</a></button>
				</section>
			);
		}
	}
});