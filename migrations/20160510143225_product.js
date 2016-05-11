exports.up = function(knex, Promise) {
	return knex.schema.createTable('product', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('name').nullable();
		t.string('price').nullable();
		t.string('category').nullable();
		t.string('quantity').nullable();
		t.string('description').nullable();
		
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('product');
};

