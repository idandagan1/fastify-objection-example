const Company = require('../../models/companies.model');

const RouteOptions = {
  get: {
    handler: async (req, reply, next) => {
      const res = await Company.query();
      return reply.send(res);
    }
  },
  create: {
    handler: async (req, reply, next) => {
      const company = await Company.query().insert({
        id: 1,
        domain: 'some domain'
      });

      reply.send(company);
    }
  }
};

const fp = require('fastify-plugin')

module.exports = fp((fastify, opts, done) => {
  fastify.get('/company', RouteOptions.get);
  fastify.post('/company', RouteOptions.create);
  done();
});
