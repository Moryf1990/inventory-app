import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<Nav />
				<h1>Inventory App</h1>
				<section className="loginHomeSection">
					<h1>Add Product</h1>
					<div>Product Name</div>
					<input/>
					<div>Price</div>
					<input/>
					<div>Category</div>
					<select>
						<option value=""></option>
						<option value="Laptops">Laptops</option>
					</select>
					<div>Quantity</div>
					<input/>
					<div>Description</div>
					<textarea></textarea>
					<div>
						<button>Cancel</button>
						<button>Add Product</button>	
					</div>
				</section>
			</section>
		);
	}
});