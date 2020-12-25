import { Model } from 'feathers-objection';

declare module 'fastify' {
    export interface FastifyRequest {
        Person: Model;
        Company: Model;
        PersonCompany: Model;
    }
}
