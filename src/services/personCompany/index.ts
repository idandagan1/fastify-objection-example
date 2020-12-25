import AutoLoad from 'fastify-autoload';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
import { dirname, join } from 'path'

const dir = dirname(__filename);

module.exports = async (fastify: FastifyInstance, opts: FastifyServerOptions) => {
  // Place here your custom code!

  // // This loads all plugins defined in routes
  // // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: join(dir, 'routes'),
    options: Object.assign({}, opts)
  });

}
