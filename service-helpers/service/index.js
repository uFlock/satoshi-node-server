"use strict";

const environment = require('../../components/satoshi-app-environment');

const satoshiConfig = environment.getSatoshi();

const defaultServiceConfig = {};

module.exports = {
	createService,
	startService
};

function createService(config) {

	const serviceConfig = config ? config : defaultServiceConfig;

	return require('fastify')(serviceConfig);
}

function startService(fastify) {

	fastify.listen(satoshiConfig.port, satoshiConfig.hostname);

	console.log(`Server Starting on ${satoshiConfig.hostname}:${satoshiConfig.port}`);
}
