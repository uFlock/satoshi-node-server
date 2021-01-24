"use strict";

const environment = require('../../components/satoshi-app-environment');

const cors = require('fastify-cors');
const formBody = require('fastify-formbody');
const cookie = require('fastify-cookie');
const compress = require('fastify-compress');

const satoshiConfig = environment.getSatoshi();

function setFormBody(fastify) {
	fastify.register(formBody);
}

function setCookie(fastify) {
	fastify.register(cookie);
}

function setCors(fastify) {

	if (satoshiConfig.allowCors === true) {

		fastify.register(cors, {
			origin: true,
			methods: ['GET', 'POST', 'DELETE', 'PUT'],
			allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Cache-Control', 'x-mime-type', 'x-file-name', 'X-File-Size', 'satoshiToken'],
			credentials: true,
		});
	}
}

function setCompress(fastify) {
	fastify.register(compress);
}

module.exports = {
	setFormBody,
	setCookie,
	setCors,
	setCompress,
};
