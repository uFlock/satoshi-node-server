/**
 * Created by uFlock on 27/01/2021.
 */

"use strict";

const description = 'Retrieve user details using session token.';

const tags = ['user'];

const queryStringJsonSchema = {};

const paramsJsonSchema = {};

const headersJsonSchema = {
	type: 'object',
	required: ['sessionToken'],
	properties: {
		sessionToken: { type: 'string', description: 'Obtained from login route.'}
	},
};

const responseJsonSchema = {
	200: {
		type: 'object',
		properties: {
			username: { type: 'string' },
			age: { type: 'number' },
			score: { type: 'number' },
			sessionToken: { type: 'string' },
		}
	},
	400: {
		type: 'object',
		properties: {
			message: { type: 'string' },
		}
	}
};

const schema = {
	description,
	tags,
	querystring: queryStringJsonSchema,
	params: paramsJsonSchema,
	headers: headersJsonSchema,
	response: responseJsonSchema,
};

module.exports = schema;
