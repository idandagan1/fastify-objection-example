import { Company } from '../../../models';
import { FastifyRequest, FastifyReply, FastifyInstance, FastifyServerOptions } from 'fastify';
import fp from 'fastify-plugin'

export const RouteOptions = {
    get: {
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            const query = Company.query();

            // if (req.params.id)
            //     query.findById(req.params.id);

            const company = await query;
            return reply.send(company);
        }
    },
    create: {
        handler: async (req: any, reply: FastifyReply) => {
            const company = await Company.query().insert(req.body);
            reply.send(company);
        }
    }
};

function routeOptions(fastify: FastifyInstance, options: FastifyServerOptions, next: any) {
    fastify.decorate('CompanyOptions', RouteOptions)

    next()
}

export default fp(routeOptions, {
    name: 'companies-options' // this is used by fastify-plugin to derive the property name
})
