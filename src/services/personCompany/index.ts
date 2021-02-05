import { FastifyInstance, FastifyServerOptions } from 'fastify';
import fp from 'fastify-plugin';
import PersonCompanyModel from './person-company.model';
import routes from './person-companies.routes';
import { createController } from '../../setup/controllers';

export const controller = fp(async (fastify) => {
    /**
     * the reference of the object is shared with all the requests.
     * any mutation will impact all requests, potentially creating security vulnerabilities or memory leaks.
     * To achieve proper encapsulation across requests, configure a new value for each incoming request
     * in the 'onRequest' hook
     */
    fastify.decorateRequest('PersonCompany', null);
    fastify.addHook('onRequest', async (req, _reply) => {
        req.PersonCompany = createController({ model: PersonCompanyModel });
    });
});

const init = async (fastify: FastifyInstance, _opts: FastifyServerOptions) => {
    fastify.register(routes);
};

export default init;
