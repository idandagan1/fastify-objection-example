import { Model } from 'objection';

export default class CompanyModel extends Model {
    // Table name is the only required property.
    static tableName = 'company';

    // Each model must have a column (or a set of columns) that uniquely
    // identifies the rows. The column(s) can be specified using the `idColumn`
    // property. `idColumn` returns `id` by default and doesn't need to be
    // specified unless the model's primary key is something else.
    static idColumn = 'id';

    // Optional JSON schema. This is not the database schema!
    // No tables or columns are generated based on this. This is only
    // used for input validation. Whenever a model instance is created
    // either explicitly or implicitly it is checked against this schema.
    // See http://json-schema.org/ for more info.
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['domain'],

            properties: {
                id: { type: 'integer' },
                domain: { type: 'string', minLength: 1, maxLength: 255 },
            },
        };
    }

    // This object defines the relations to other models.
    static get relationMappings() {
        const Person = require('../person/persons.model');
        const PersonCompany = require('../personCompany/person-company.model');

        return {
            person: {
                relation: Model.HasManyRelation,
                modelClass: Person,
                join: {
                    from: 'company.id',
                    to: 'person.company_id',
                },
            },
            personCompany: {
                relation: Model.HasManyRelation,
                modelClass: PersonCompany,
                join: {
                    from: 'company.id',
                    to: 'personCompany.company_id',
                },
            },
        };
    }
}
