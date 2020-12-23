'use strict'

const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts)
  })

  fastify.register(require('fastify-objectionjs'), {
    knexConfig: {
      client: 'pg',
      connection: {
        database: 'gibush',
        host: 'localhost',
        user:     'postgres',
      },
    },
  })
}
