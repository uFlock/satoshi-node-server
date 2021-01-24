/**
 * Created by uFLock on 24/01/2021.
 */

"use strict";

function setRoutes(fastify) {

	fastify.get('/', function (req, res) {
		res.code(200).header('Content-Type', 'application/json; charset=utf-8').send('Satoshi Technical Task - Node Server');
	});

	fastify.get('/alive', (req, res) => {
		res.code(200).send('I am alive');
	});

	require('../routes/api')(fastify);
}

module.exports = {
	setRoutes
};



