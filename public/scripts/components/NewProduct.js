import React from 'react';


const NewProduct = React.createClass({
  render: function() {
    return (
       	<section>
	       <div>Name: {this.props.name}</div>
	       <div>Price: {this.props.price}</div>
	       <div>Category: {this.props.category}</div>
	       <button className="deleteButton" onClick={this.deleteItem}>Delete</button>
	       <button className="editButton" onClick={this.editItem}>Edit</button>
	     </section>
    );
  },

  deleteItem: function() {
		console.log(this.props.id);
		this.props.product.destroy();
	},

  editItem: function() {
  	var name = prompt('What should the new name be?');
  	<div>Name: {this.name.value}</div>
  	var price = prompt('What should the price be?');
  	<div>Price: {this.price.value}</div>
  	var category = prompt('What should the category be?');
  	<div>Category: {this.price.category}</div>
  }

});

export default NewProduct;