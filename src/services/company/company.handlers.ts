import { FastifyRequest, FastifyReply } from 'fastify';

export const RouteOptions = {
    get: {
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            // @ts-ignore
            const company = await req.Company.get(req.params.id);

            return reply.send(company);
        },
    },
    find: {
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            const company = await req.Company.find({ query: req.query }, {});

            return reply.send(company);
        },
    },
    create: {
        handler: async (req: any, reply: FastifyReply) => {
            const company = await req.Company.create(req.body);

            return reply.send(company);
        },
    },
};
