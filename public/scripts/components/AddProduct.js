import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<Nav />
				<h1 className="inventoryApp">Inventory App</h1>
				<section className="loginHomeSection">
					<h1 className="addProductHeaders">Add Product</h1>
					<div className="addProductHeaders">Product Name</div>
					<input/>
					<div className="addProductHeaders">Price</div>
					<input/>
					<div className="addProductHeaders">Category</div>
					<select>
						<option value=""></option>
						<option value="Laptops">Laptops</option>
					</select>
					<div className="addProductHeaders">Quantity</div>
					<input/>
					<div className="addProductHeaders">Description</div>
					<textarea></textarea>
					<div>
						<button className="addProductButton">Cancel</button>
						<button className="addProductButton">Add Product</button>	
					</div>
				</section>
			</section>
		);
	}
});