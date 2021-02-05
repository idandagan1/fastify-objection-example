import { FastifyInstance } from 'fastify';
import { RouteOptions } from './company.handlers';

const routes = async (fastify: FastifyInstance) => {
    fastify.get('/:id', RouteOptions.get);
    fastify.get('/', RouteOptions.find);
    fastify.post('/', RouteOptions.create);
    fastify.delete('/:id', RouteOptions.remove);
};

export default routes;
