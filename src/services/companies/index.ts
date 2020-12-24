import AutoLoad from 'fastify-autoload';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
import { dirname, join } from 'path'

const dir = dirname(__filename);

module.exports = async function (fastify: FastifyInstance, opts: FastifyServerOptions) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: join(dir, 'plugins'),
    options: Object.assign({}, opts)
  });

  // // This loads all plugins defined in routes
  // // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: join(dir, 'routes'),
    options: Object.assign({}, opts)
  });

}
