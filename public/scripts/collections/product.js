import Backbone from 'backbone';
import ProductModel from './../models/ProductModel';

const ProductCollection = Backbone.Collection.extend({
	model: ProductModel,
	url: '/api/v1/product'
});

export default new ProductCollection();