import React from 'react';
import user from '../models/UserModel.js';
import productCollection from '../collections/product.js';

export default React.createClass({
	componentDidMount: function() {
		productCollection.on('update', () => {
			this.setState({products: productCollection});
		});
		productCollection.fetch();
	},

	getInitialState: function() {
		return {
			products: productCollection
		};
	},
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
			const allProducts = this.state.products.map((product, idex) => {
				return (
					<option>{product.get('name')} {product.get('price')} {product.get('category')}</option>
				);
			});
			return (
				<section className="home">
					<h1 className="inventoryApp">Inventory App</h1>
					<div className="productContainer">
						{allProducts}
					</div>
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