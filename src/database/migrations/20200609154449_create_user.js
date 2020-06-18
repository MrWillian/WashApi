exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('initialization_vector').notNullable();
    table.string('cellphone');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
