exports.up = function(knex) {
    return knex.schema
        .createTable('company', table => {
            table.increments('id').primary();
            table.string('domain', 80).notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('company')
};
