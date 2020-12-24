import { RouteHandler } from 'fastify';

interface CompanyRoute {
    get: RouteHandler,
    create: RouteHandler
}

interface PersonRoute {
    get: RouteHandler,
    create: RouteHandler
}

declare module 'fastify' {
    export interface FastifyInstance {
        CompanyOptions: CompanyRoute;
        PersonOptions: PersonRoute;
    }
}
