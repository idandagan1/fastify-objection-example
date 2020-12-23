const Person = require('../../../models/persons.model');

const RouteOptions = {
  get: {
    handler: async (req, reply, next) => {
      const query = Person.query().withGraphJoined('company');

      if (req.params.id)
        query.findById(req.params.id);

      const person = await query;
      return reply.send(person);
    }
  },
  create: {
    handler: async (req, reply, next) => {
      const person = await Person.query().insert({
        ...req.body
      });

      reply.send(person);
    }
  }
};

const fp = require('fastify-plugin')

module.exports = fp((fastify, opts, done) => {
  fastify.get('/person', RouteOptions.get);
  fastify.get('/person/:id', RouteOptions.get);
  fastify.post('/person', RouteOptions.create);
  done();
});
