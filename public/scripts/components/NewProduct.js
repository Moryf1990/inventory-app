import React from 'react';


const NewProduct = React.createClass({
  render: function() {
    return (
       	// <a href="#" className="productList">{product.get('name')} {product.get('price')} {product.get('category')} <button onClick={this.deleteItem}>Delete</button> <button>Edit</button></a>
       	<section>
	       <div>Name: {this.props.name}</div>
	       <div>Price: {this.props.price}</div>
	       <div>Category: {this.props.category}</div>
	       <button onClick={this.deleteItem}>Delete</button>
	     </section>
    );
  },

  deleteItem: function() {
		// productCollection.destroy({success: function(ProductModel, destroy) {

		// }});
		console.log(this.props.id);
		this.props.product.destroy();
	}
});

export default NewProduct;