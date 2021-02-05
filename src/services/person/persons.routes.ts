import { FastifyInstance } from 'fastify';
import { RouteOptions } from './persons.handlers';

const routes = async (fastify: FastifyInstance) => {
    fastify.get('/', RouteOptions.find);
    fastify.get('/:id', RouteOptions.get);
    fastify.post('/', RouteOptions.create);
    fastify.delete('/:id', RouteOptions.remove);
};

export default routes;
