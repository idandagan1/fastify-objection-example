import { FastifyInstance } from 'fastify';
import { controller as PersonController } from '../services/person';
import { controller as CompanyController } from '../services/company';
import { Service } from 'feathers-objection';
import { Id, NullableId, Params } from '@feathersjs/feathers';

class AppController extends Service {
    constructor(options: object) {
        super(options);
    }

    get(id: Id) {
        return super.get(id, {});
    }

    find(params?: Params) {
        return super.find(params);
    }

    create(data: object, params?: Params) {
        return super.create(data);
    }

    update(id: Id, data: object, params?: Params) {
        return super.update(id, data, params);
    }

    patch(id: NullableId, data: object, params?: Params) {
        return super.patch(id, data, params);
    }

    remove(id: NullableId, params?: Params) {
        return super.remove(id, params);
    }
}

export const createController = (options: object) => {
    return new AppController(options);
}

const initServices = (fastify:FastifyInstance) => {
    fastify.register(PersonController);
    fastify.register(CompanyController);
}

export default initServices;
