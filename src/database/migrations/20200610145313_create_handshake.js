exports.up = function(knex) {
  return knex.schema.createTable('handshakes', function(table) {
    table.increments();
    table.decimal('value').notNullable();
    table.bool('finished').notNullable();
    table.timestamp('date_finished');
    table.integer('client_id', 11).unsigned().references('id').inTable('clients');
    table.integer('company_id', 11).unsigned().references('id').inTable('companies');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('handshakes');
};
