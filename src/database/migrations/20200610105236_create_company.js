exports.up = function(knex) {
  return knex.schema.createTable('companies', function(table) {
    table.increments();
    table.string('cnpj');
    table.string('tellphone');
    table.integer('user_id').unsigned();
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies');
};
