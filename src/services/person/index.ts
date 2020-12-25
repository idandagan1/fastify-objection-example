import { FastifyInstance, FastifyServerOptions } from 'fastify';
import fp from 'fastify-plugin';
import { Person } from '../../models';
import routes from './persons.routes';
import { createController } from '../../setup/controllers';

export const controller = fp(async fastify => {
    /**
     * the reference of the object is shared with all the requests.
     * any mutation will impact all requests, potentially creating security vulnerabilities or memory leaks.
     * To achieve proper encapsulation across requests, configure a new value for each incoming request
     * in the 'onRequest' hook
     */
    fastify.decorateRequest('Person', null);
    fastify.addHook('onRequest', async (req, reply) => {
        req.Person = createController({ model: Person });
    })
})

const init = async (fastify: FastifyInstance, opts: FastifyServerOptions) => {
    fastify.register(routes);
}

export default init;
