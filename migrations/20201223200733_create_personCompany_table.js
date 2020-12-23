exports.up = function(knex) {
    return knex.schema
        .createTable('person_company', table => {
            table.integer('person_id');
            table.integer('company_id');
            table.string('date', 80).notNullable();
            table.primary(['person_id', 'company_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('person_company')
};
