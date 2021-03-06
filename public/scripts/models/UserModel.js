import Backbone from 'backbone';

const UserModel = Backbone.Model.extend ({
	defaults:{
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/user',
	idAttribute: 'id'

});


 export default new UserModel(window.user);