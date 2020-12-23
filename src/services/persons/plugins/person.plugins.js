const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts, done) {
  fastify.decorate('utility', () => { return 'ok' })
})
