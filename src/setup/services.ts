import { FastifyInstance } from 'fastify';

const initServices = (fastify:FastifyInstance) => {
    fastify.register(require('../services/companies'));
    fastify.register(require('../services/personCompany'));
    fastify.register(require('../services/persons'));
}

export default initServices;
