import { FastifyInstance, FastifyServerOptions } from 'fastify';
import fp from 'fastify-plugin'

module.exports = fp((fastify: FastifyInstance, opts: FastifyServerOptions, done: any) => {
  fastify.get('/company', fastify.CompanyOptions.get);
  fastify.post('/company', fastify.CompanyOptions.create);
  done();
});
