exports.up = function (knex) {
    return knex.schema.createTable('person', (table) => {
        table.increments('id').primary();
        table.integer('company_id').unsigned();
        table.string('first_name', 80).notNullable();
        table.string('last_name', 80).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('person');
};
