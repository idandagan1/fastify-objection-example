import { Model } from 'objection';
import PersonModel from './persons.model';
import CompanyModel from './companies.model';

export default class PersonCompanyModel extends Model {
    // Table name is the only required property.
    static tableName = 'personCompany';

    // Each model must have a column (or a set of columns) that uniquely
    // identifies the rows. The column(s) can be specified using the `idColumn`
    // property. `idColumn` returns `id` by default and doesn't need to be
    // specified unless the model's primary key is something else.
    static idColumn = ['person_id', 'company_id'];

    // Optional JSON schema. This is not the database schema!
    // No tables or columns are generated based on this. This is only
    // used for input validation. Whenever a model instance is created
    // either explicitly or implicitly it is checked against this schema.
    // See http://json-schema.org/ for more info.
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['personId', 'companyId'],

            properties: {
                personId: { type: 'integer' },
                companyId: { type: 'integer' },
                endDate: { type: 'string' },
            }
        };
    }

    // This object defines the relations to other models.
    static get relationMappings() {
        return {
            person: {
                relation: Model.BelongsToOneRelation,
                modelClass: PersonModel,
                join: {
                    from: 'personCompany.person_id',
                    to: 'person.id',
                },
            },
            company: {
                relation: Model.BelongsToOneRelation,
                modelClass: CompanyModel,
                join: {
                    from: 'personCompany.company_id',
                    to: 'company.id'
                }
            },
        };
    }
}
