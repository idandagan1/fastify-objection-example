import { FastifyInstance, FastifyServerOptions } from 'fastify';
import fp from 'fastify-plugin';
import { Company } from '../../models';
import routes from './company.routes';
import createController from 'feathers-objection';

export const controller = fp(async fastify => {
    /**
     * the reference of the object is shared with all the requests.
     * any mutation will impact all requests, potentially creating security vulnerabilities or memory leaks.
     * To achieve proper encapsulation across requests, configure a new value for each incoming request
     * in the 'onRequest' hook
     */
    fastify.decorateRequest('Company', null);
    fastify.addHook('onRequest', async (req, reply) => {
        req.Company = createController({ model: Company });
    })
})

const init = async (fastify: FastifyInstance, opts: FastifyServerOptions) => {
    fastify.register(routes);
}

export default init;
