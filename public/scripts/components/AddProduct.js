import React from 'react';
import Nav from './Navigation.js';
import ProductCollection from '../collections/product.js';

export default React.createClass({
	render: function() {
		console.log('product render');
		return (
			<section>
				<h1 className="inventoryApp">Inventory App</h1>
				<form className="loginHomeSection" onSubmit={this.addProduct}>
					<h1 className="addProductHeaders">Add Product</h1>
					<div className="addProductHeaders">Product Name</div>
					<input ref="name"/>
					<div className="addProductHeaders">Price</div>
					<input ref="price"/>
					<div className="addProductHeaders">Category</div>
					<select ref="category">
						<option value=""></option>
						<option value="Laptops">Laptops</option>
					</select>
					<div className="addProductHeaders">Quantity</div>
					<input ref="quantity"/>
					<div className="addProductHeaders">Description</div>
					<textarea ref="description"></textarea>
					<div>
						<button className="addProductButton">Cancel</button>
						<button className="addProductButton">Add Product</button>	
					</div>
				</form>
			</section>
		);
	},

	addProduct: function(e) {
		e.preventDefault();
		ProductCollection.create({
			name: this.refs.name.value,
			price: this.refs.price.value,
			category: this.refs.category.value,
			quantity: this.refs.quantity.value,
			description: this.refs.description.value
		});
	}
});