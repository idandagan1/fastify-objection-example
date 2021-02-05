const config = require('config');
const swagger = config.get('swagger');

module.exports = {
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Fastify objection app',
            description: 'Best backend in the world 🚀',
            version: '0.1.0',
        },
        ...swagger,
    },
    exposeRoute: true,
};
