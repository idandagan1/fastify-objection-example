const Company = require('../../../models/companies.model');

const RouteOptions = {
  get: {
    handler: async (req, reply, next) => {
      const query = Company.query();

      if (req.params.id)
        query.findById(req.params.id);

      const company = await query;
      return reply.send(company);
    }
  },
  create: {
    handler: async (req, reply, next) => {
      const company = await Company.query().insert({
        ...req.body,
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
