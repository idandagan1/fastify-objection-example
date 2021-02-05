import { FastifyInstance } from 'fastify';
import { get } from 'config';
import Knex from 'knex';
import fp from 'fastify-plugin';
import { Model, knexSnakeCaseMappers } from 'objection';

const knexConfig: Knex.Config = get('postgres');
const knex = Knex({
    ...knexConfig,
    /**
     * Function for adding a snake_case to camelCase conversion to knex
     * Ref: https://vincit.github.io/objection.js/api/objection/#knexsnakecasemappers
     */
    ...knexSnakeCaseMappers(),
});

const initDb = async (fastify: FastifyInstance) => {
    Model.knex(knex);
    fastify.register(require('fastify-objectionjs'), {
        knexConfig,
    });
};

export default fp(initDb);
