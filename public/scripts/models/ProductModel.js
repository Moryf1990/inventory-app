import Backbone from 'backbone';

const ProductModel = Backbone.Model.extend({
	defaults: {
		name: '',
		price: '',
		category: '',
		quantity: '',
		description: '',
		createdAt: null,
		updatedAt: null
	},
	urlRoot: '/api/v1/product',
	idAttribute: 'id'
});

export default ProductModel;