import React from 'react';
import user from '../models/UserModel.js';
import productCollection from '../collections/product.js';
import productModel from '../models/ProductModel.js';
import NewProduct from './NewProduct.js';

export default React.createClass({
	componentDidMount: function() {
		productCollection.on('update', () => {
			console.log('product collection was updated');
			this.setState({
				products: productCollection,
				product: productModel
			});
		});
		productCollection.fetch();
	},

	getInitialState: function() {
		return {
			products: productCollection,
			product: productModel
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
					<NewProduct 
					name={product.get('name')}
					price={product.get('price')}
					category={product.get('category')}
					id={product.get('id')}
					product={product}/>
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
					<h1 className="inventoryApp">Inventory App</h1>
					<h2 className="inventoryHeader">Welcome to Inventory App</h2>
					<h3 className="inventoryText">You must login before accessing the system</h3>
					<button className="homeLogin"><a href="/login" className="text">Login</a></button>
					<button className="homeRegister"><a href = "/register" className="text">Register</a></button>
				</section>
			);
		}
	}

	
});