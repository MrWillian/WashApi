exports.up = function(knex) {
  return knex.schema.createTable('addresses', function(table) {
    table.increments();
    table.string('country').notNullable();
    table.string('state').notNullable();
    table.string('city').notNullable();
    table.string('cep').notNullable();
    table.string('number').notNullable();
    table.integer('user_id').unsigned();
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('addresses');
};
