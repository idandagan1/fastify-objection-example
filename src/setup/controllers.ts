import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { controller as PersonController } from '../services/person';
import { controller as CompanyController } from '../services/company';
import { controller as PersonCompanyController } from '../services/personCompany';
import { Service } from 'feathers-objection';
import { Id, NullableId, Params } from '@feathersjs/feathers';

const registerServices = async (fastify: FastifyInstance) => {
    fastify.register(PersonController);
    fastify.register(CompanyController);
    fastify.register(PersonCompanyController);
};

export default fp(registerServices);

/**
 * The AppController is for adding global logic before/after the DB layer (auth, logs, errors, etc...)
 */
class AppController<T> extends Service<T> {
    get(id: Id, params: Params = {}) {
        return super.get(id, params);
    }

    find(params: Params) {
        return super.find(params);
    }

    create(data: T | T[], params: Params = {}) {
        return super.create(data, params);
    }

    update(id: Id, data: T, params: Params = {}) {
        return super.update(id, data, params);
    }

    patch(id: NullableId, data: Partial<T>, params: Params = {}) {
        return super.patch(id, data, params);
    }

    remove(id: NullableId, params: Params = {}) {
        return super.remove(id, params);
    }
}

export const createController = (options: any) => {
    return new AppController(options);
};
