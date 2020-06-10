exports.up = function(knex) {
  return knex.schema.createTable('companies', function(table) {
    table.increments();
    table.string('cnpj').notNullable();
    table.string('tellphone');
    table.integer('user_id', 11).unsigned().references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies');
};
