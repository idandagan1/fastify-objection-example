import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import pkg from '../../package.json';

export const healthCheckRoute: FastifyPluginAsync = async (fastify) => {
    fastify.get('/healthcheck', async (_req, reply) => {
        reply.send({
            name: pkg.name,
            version: pkg.version,
        });
    });
};

const healthCheckPlugin = fp(healthCheckRoute);

export default healthCheckPlugin;
