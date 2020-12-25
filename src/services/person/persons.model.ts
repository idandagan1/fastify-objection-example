import { Model, JSONSchema } from 'objection';
import CompanyModel from '../company/companies.model';
import PersonCompanyModel from '../personCompany/person-company.model';

export default class PersonModel extends Model {
    // Table name is the only required property.
    static tableName = 'person';

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
    static get jsonSchema (): JSONSchema {
        return {
            type: 'object',
            required: ['firstName', 'lastName'],

            properties: {
                id: { type: 'integer' },
                firstName: { type: 'string', minLength: 1, maxLength: 255 },
                lastName: { type: 'string', minLength: 1, maxLength: 255 },
                companyId: { type: ['integer', 'null'] }
            }
        };
    }

    // This object defines the relations to other models.
    static get relationMappings () {
        return {
            company: {
                relation: Model.BelongsToOneRelation,
                modelClass: CompanyModel,
                join: {
                    from: 'person.company_id',
                    to: 'company.id'
                }
            },
            personCompany: {
                relation: Model.BelongsToOneRelation,
                modelClass: PersonCompanyModel,
                join: {
                    from: 'person.id',
                    to: 'personCompany.person_id'
                }
            }
        };
    }
}
