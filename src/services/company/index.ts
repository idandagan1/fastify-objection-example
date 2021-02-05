import { FastifyInstance, FastifyServerOptions } from 'fastify';
import fp from 'fastify-plugin';
import CompanyModel from './companies.model';
import routes from './company.routes';
import { createController } from '../../setup/controllers';

export const controller = fp(async (fastify) => {
    /**
     * the reference of the object is shared with all the requests.
     * any mutation will impact all requests, potentially creating security vulnerabilities or memory leaks.
     * To achieve proper encapsulation across requests, configure a new value for each incoming request
     * in the 'onRequest' hook
     */
    fastify.decorateRequest('Company', null);
    fastify.addHook('onRequest', async (req, reply) => {
        req.Company = createController({ model: CompanyModel });
    });
});

const init = async (fastify: FastifyInstance, opts: FastifyServerOptions) => {
    fastify.register(routes);
};

export default init;
