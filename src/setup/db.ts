import { FastifyInstance } from 'fastify';

const initDb = (fastify:FastifyInstance) => {
    fastify.register(require('fastify-objectionjs'), {
        knexConfig: {
            client: 'pg',
            connection: {
                database: 'gibush',
                host: 'localhost',
                user: 'postgres'
            }
        }
    })
}

export default initDb;
