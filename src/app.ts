import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import swaggerOptions from '../swagger';
import { dirname, join } from 'path';

export type AppOptions = Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (fastify): Promise<void> => {
    const dir = dirname(__filename);

    fastify.register(require('fastify-swagger'), swaggerOptions);

    fastify.register(AutoLoad, {
        dir: join(dir, 'setup'),
    });

    fastify.register(AutoLoad, {
        dir: join(dir, 'services'),
    });

    fastify.ready((err) => {
        if (err) throw err;
        fastify.swagger();
    });
};

export default app;
