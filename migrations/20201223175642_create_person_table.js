exports.up = function(knex) {
    return knex.schema
        .createTable('person', table => {
            table.increments('id').primary();
            table.integer('companyId').unsigned();
            table.string('firstName', 80).notNullable();
            table.string('lastName', 80).notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('person')
};
