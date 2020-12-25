import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import initDb from './setup/db';
import { registerServices } from './setup/controllers';
import { dirname, join} from 'path';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
  initDb(fastify);
  const dir = dirname(__filename);

  registerServices(fastify);

  fastify.register(AutoLoad, {
    dir: join(dir, 'services'),
    options: Object.assign({}, opts)
  });
}

export default app;
