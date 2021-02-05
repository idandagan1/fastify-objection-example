import { FastifyReply, FastifyRequest } from 'fastify';

export const RouteOptions = {
    get: {
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            // @ts-ignore
            const person = await req.Person.get(req.params.id, {});

            return reply.send(person);
        },
    },
    find: {
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            // @ts-ignore
            const person = await req.Person.find({ query: req.query }, {});

            return reply.send(person);
        },
    },
    create: {
        handler: async (req: any, reply: FastifyReply) => {
            const person = await req.Person.create(req.body);

            return reply.send(person);
        },
    },
    remove: {
        handler: async (req: any, reply: FastifyReply) => {
            const person = await req.Person.remove(req.params.id);

            return reply.send(person);
        },
    },
};
