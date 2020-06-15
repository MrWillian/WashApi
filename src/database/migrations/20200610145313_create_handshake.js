exports.up = function(knex) {
  return knex.schema.createTable('handshakes', function(table) {
    table.increments();
    table.decimal('value').notNullable();
    table.bool('finished').notNullable();
    table.timestamp('date_finished');
    table.integer('client_id').unsigned();
    table.integer('company_id').unsigned();
    table.foreign("client_id").references("clients.id").onDelete("CASCADE");
    table.foreign("company_id").references("companies.id").onDelete("CASCADE");
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('handshakes');
};
