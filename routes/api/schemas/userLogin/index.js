/**
 * Created by uFlock on 27/01/2021.
 */

"use strict";

const description = 'Retrieve user details using username and password.';

const tags = ['user'];

const bodyJsonSchema = {
	type: 'object',
	required: ['username', 'password'],
	properties: {
		username: { type: 'string' },
		password: { type: 'string' }
	}
};

const queryStringJsonSchema = {};

const paramsJsonSchema = {};

const headersJsonSchema = {};

const responseJsonSchema = {
	200: {
		type: 'object',
		properties: {
			username: { type: 'string'},
			age: { type: 'number' },
			score: { type: 'number' },
			sessionToken: { type: 'string', description: 'Obtained by using login route.' },
		}
	},
	400: {
		type: 'object',
		properties: {
			message: { type: 'string' },
		}
	},
	401: {
		type: 'string',
		example: 'Invalid Credentials'
	}
};

const schema = {
	description,
	tags,
	body: bodyJsonSchema,
	querystring: queryStringJsonSchema,
	params: paramsJsonSchema,
	headers: headersJsonSchema,
	response: responseJsonSchema,
};

module.exports = schema;
