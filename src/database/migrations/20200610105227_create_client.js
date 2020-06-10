exports.up = function(knex) {
  return knex.schema.createTable('clients', function(table) {
    table.increments();
    table.string('cpf').notNullable();
    table.integer('user_id', 11).unsigned().references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};
