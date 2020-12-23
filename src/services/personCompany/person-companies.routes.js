const PersonCompany = require('../../models/person-company.model');

const RouteOptions = {
  get: {
    handler: async (req, reply, next) => {
      const { person_id, company_id } = req.query;
      const res = await PersonCompany
          .query()
          .findById([person_id, company_id])
          .withGraphJoined('[person, company]');
      return reply.send(res);
    }
  },
  create: {
    handler: async (req, reply, next) => {
      const personCompany = await PersonCompany
          .query()
          .insert({
            ...req.body,
            date: new Date(),
          });

      reply.send(personCompany);
    }
  }
};

const fp = require('fastify-plugin')

module.exports = fp((fastify, opts, done) => {
  fastify.get('/person-company', RouteOptions.get);
  fastify.post('/person-company', RouteOptions.create);
  done();
});
