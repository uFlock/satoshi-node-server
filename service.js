"use strict";

if (process.argv[2] !== undefined) {
	global.env = process.argv[2].toUpperCase();
}

const service = require('./helpers/service');
const plugins = require('./helpers/plugins');

const routes = require('./routes');

const fastify = service.createService();

plugins.setCompress(fastify);
plugins.setFormBody(fastify);
plugins.setCookie(fastify);
plugins.setCors(fastify);

routes.setRoutes(fastify);

service.startService(fastify);
