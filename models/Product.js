require('./User');
module.exports = bookshelf.model('Product', {
	tableName: 'product',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});