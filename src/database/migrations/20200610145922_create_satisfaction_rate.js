exports.up = function(knex) {
  return knex.schema.createTable('satisfaction_rates', function(table) {
    table.increments();
    table.integer('votes_in_favor').notNullable().defaultTo(0);
    table.integer('votes_against').notNullable().defaultTo(0);
    table.integer('company_id').unsigned();
    table.foreign("company_id").references("companies.id").onDelete("CASCADE");
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('satisfaction_rates');
};
