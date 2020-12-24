import { FastifyInstance, FastifyServerOptions } from 'fastify';
import fp from 'fastify-plugin';

module.exports = fp((fastify: FastifyInstance, opts: FastifyServerOptions, done: any) => {
  fastify.get('/person', fastify.PersonOptions.get);
  fastify.get('/person/:id', fastify.PersonOptions.get);
  fastify.post('/person', fastify.PersonOptions.create);
  done();
});
