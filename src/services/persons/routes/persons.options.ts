import { Person } from '../../../models';
import {FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions} from 'fastify';
import fp from "fastify-plugin";

const RouteOptions = {
    get: {
        handler: async (req:FastifyRequest, reply:FastifyReply) => {
            const query = Person.query().withGraphJoined('company');

            // if (req.params)
            //     query.findById(req.params.id);

            const person = await query;
            return reply.send(person);
        }
    },
    create: {
        handler: async (req:any, reply:FastifyReply) => {
            const person = await Person.query().insert(req.body);
            reply.send(person);
        }
    }
};

function routeOptions(fastify: FastifyInstance, options: FastifyServerOptions, next: any) {
    fastify.decorate('PersonOptions', RouteOptions)

    next()
}

export default fp(routeOptions, {
    name: 'person-options' // this is used by fastify-plugin to derive the property name
})
