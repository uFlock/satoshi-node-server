/**
 * Created by uFLock on 24/01/2021.
 */

"use strict";

function setRoutes(fastify) {

	fastify.get('/', (req, res) => {
		res.code(200).send('Satoshi Technical Task - Node Server');
	});

	fastify.get('/alive', (req, res) => {
		res.code(200).send('I am alive');
	});

	require('./api')(fastify);
}

module.exports = {
	setRoutes
};
