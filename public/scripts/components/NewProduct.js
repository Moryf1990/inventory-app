import React from 'react';


const NewProduct = React.createClass({
  getInitialState: function() {
  	return {
  		name: this.props.name,
  		price: this.props.price,
  		category: this.props.category
  	};
  },
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
  	this.setState({name});
  	var price = prompt('What should the new price be?');
  	this.setState({price});
  	var category = prompt('What should the new category be?');
  	this.setSTate({category});
  }

});

export default NewProduct;