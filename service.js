"use strict";

global.env = process.argv[2] !== undefined ? process.argv[2].toUpperCase() : 'LOCAL';

if (global.env === 'LOCAL') {
	require('custom-env').env('local');
}

const service = require('./service-helpers/service');
const plugins = require('./service-helpers/plugins');

const routes = require('./routes');

const fastify = service.createService();

plugins.setCompress(fastify);
plugins.setFormBody(fastify);
plugins.setCookie(fastify);
plugins.setCors(fastify);
plugins.setSwagger(fastify);
plugins.setMongoose(fastify);

routes.setRoutes(fastify);

service.startService(fastify);
