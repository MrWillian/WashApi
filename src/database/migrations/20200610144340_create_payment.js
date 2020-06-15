exports.up = function(knex) {
  return knex.schema.createTable('payments', function(table) {
    table.increments();
    table.string('card_number').notNullable();
    table.string('card_name').notNullable();
    table.string('expire_date').notNullable();
    table.integer('cvv').notNullable();
    table.integer('user_id').unsigned();
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('payments');
};
