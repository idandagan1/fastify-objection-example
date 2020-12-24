import fp from 'fastify-plugin';
import {FastifyInstance, FastifyServerOptions} from "fastify";

module.exports = fp(async function (fastify:FastifyInstance, opts: FastifyServerOptions, done: any) {
  fastify.decorate('person-utility', () => { return 'ok' })
  done();
})
