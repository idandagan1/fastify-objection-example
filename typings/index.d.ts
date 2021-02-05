import { fastifySwagger } from 'fastify-swagger';

declare module 'fastify' {
    interface FastifyInstance {
        swagger: fastifySwagger;
    }
}
