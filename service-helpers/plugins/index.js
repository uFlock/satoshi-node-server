"use strict";

const cors = require('fastify-cors');
const formBody = require('fastify-formbody');
const cookie = require('fastify-cookie');
const compress = require('fastify-compress');
const swagger = require('fastify-swagger');
const mongoosePlugin = require('fastify-mongoose-driver').plugin;

const environment = require('../../components/satoshi-app-environment');

const swaggerConfig = environment.getSwagger();
const mongooseConfig = environment.getMongoose();
const corsPolicy = environment.getCorsPolicy();

function setFormBody(fastify) {
	fastify.register(formBody);
}

function setCookie(fastify) {
	fastify.register(cookie);
}

function setCors(fastify) {

	if (corsPolicy) {
		fastify.register(cors, corsPolicy);
	}
}

function setCompress(fastify) {
	fastify.register(compress);
}

function setSwagger(fastify) {

	fastify.register(swagger, swaggerConfig);

	fastify.ready(err => {

		if (err) {
			throw err;
		}

		fastify.swagger();
	});
}

function setMongoose(fastify) {
	fastify.register(mongoosePlugin, mongooseConfig);
}

module.exports = {
	setFormBody,
	setCookie,
	setCors,
	setCompress,
	setSwagger,
	setMongoose
};
