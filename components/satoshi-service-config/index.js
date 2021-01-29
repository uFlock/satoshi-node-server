"use strict";

const env = global.env || 'LOCAL';

const os = require('os');

const swaggerModels = require('./swaggerModels');

module.exports = {
	getSatoshi: () => environment[env].satoshi,
	getSwagger: () => environment[env].swagger,
	getMongoose: () => environment[env].mongoose,
	getCorsPolicy: () => environment[env].corsPolicy,
};

const environment = {
	LIVE: {
		satoshi: {
			hostname: os.hostname(),
			port: 443
		},
		swagger: {
			routePrefix: '/documentation',
			exposeRoute: true,
			swagger: {
				info: {
					title: 'Satoshi API',
					description: 'REST API for Technical Task',
					version: '1.0.0'
				},
				externalDocs: {
					url: 'https://swagger.io',
					description: 'Find more info here'
				},
				host: process.env.SWAGGER_HOST,
				schemes: ['http'],
				consumes: ['application/json'],
				produces: ['application/json'],
				tags: [
					{ name: 'user', description: 'User related end-points' },
				],
				definitions: swaggerModels
			},
		},
		mongoose: {
			uri: process.env.MONGO_DB_URI,
			settings: {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false
			}
		},
		corsPolicy: {
			origin: new RegExp(process.env.ALLOWED_CORS),
			credentials: true,
			methods: ['GET', 'POST', 'DELETE', 'PUT'],
			allowedHeaders: [
				'Content-Type',
				'Authorization',
				'Content-Length',
				'X-Requested-With',
				'Cache-Control',
				'x-mime-type',
				'x-file-name',
				'X-File-Size',
				'sessionToken'
			],
		}
	},
	LOCAL: {
		satoshi: {
			hostname: 'localhost',
			port: 1337
		},
		swagger: {
			routePrefix: '/documentation',
			exposeRoute: true,
			swagger: {
				info: {
					title: 'Satoshi API',
					description: 'REST API for Technical Task',
					version: '1.0.0'
				},
				externalDocs: {
					url: 'https://swagger.io',
					description: 'Find more info here'
				},
				host: process.env.SWAGGER_HOST,
				schemes: ['http'],
				consumes: ['application/json'],
				produces: ['application/json'],
				tags: [
					{ name: 'user', description: 'User related end-points' },
				],
				definitions: swaggerModels
			}
		},
		mongoose: {
			uri: process.env.MONGO_DB_URI,
			settings: {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false
			}
		},
		corsPolicy: {
			origin: new RegExp(process.env.ALLOWED_CORS),
			credentials: true,
			methods: ['GET', 'POST', 'DELETE', 'PUT'],
			allowedHeaders: [
				'Content-Type',
				'Authorization',
				'Content-Length',
				'X-Requested-With',
				'Cache-Control',
				'x-mime-type',
				'x-file-name',
				'sessionToken'
			],
		}
	}
};
