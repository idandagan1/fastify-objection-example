import { FastifyInstance } from 'fastify';
import PersonCompanyModel from './person-company.model';

const RouteOptions = {
    get: {
        handler: async (req: any, reply: any) => {
            const { person_id, company_id } = req.query;
            const res = await req.PersonCompanyModel.query()
                .findById([person_id, company_id])
                .withGraphJoined('[person, company]');
            return reply.send(res);
        },
    },
    create: {
        handler: async (req: any, reply: any) => {
            const personCompany = await PersonCompanyModel.query().insert({
                ...req.body,
                date: new Date(),
            });

            reply.send(personCompany);
        },
    },
};

const routes = async (fastify: FastifyInstance) => {
    fastify.get('/person-company', RouteOptions.get);
    fastify.post('/person-company', RouteOptions.create);
};

export default routes;
