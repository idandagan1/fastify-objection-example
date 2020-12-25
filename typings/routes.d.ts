import { RouteHandler } from 'fastify';
import { Model } from 'feathers-objection';

interface CompanyRoute {
    get: RouteHandler,
    find: RouteHandler,
    create: RouteHandler
}

interface PersonRoute {
    get: RouteHandler,
    find: RouteHandler,
    create: RouteHandler
}

declare module 'fastify' {
    export interface FastifyInstance {
        CompanyOptions: CompanyRoute;
        PersonOptions: PersonRoute;
    }

    export interface FastifyRequest {
        Person: Model;
        Company: Model;
    }
}
