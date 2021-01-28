/**
 * Created by uFlock on 27/01/2021.
 */

"use strict";

const description = 'New User Registration Form';

const tags = ['user'];

const bodyJsonSchema = {
	type: 'object',
	required: ['username', 'password', 'age', 'score'],
	properties: {
		username: { type: 'string', minLength: 3, maxLength: 25 },
		password: { type: 'string', minLength: 8 },
		age: { type: 'number', minimum: 1, maximum: 125 },
		score: { type: 'number', minimum: 0,  maximum: 1000 },
	}
};

const queryStringJsonSchema = {};

const paramsJsonSchema = {};

const headersJsonSchema = {};

const responseJsonSchema = {
	400: {
		type: 'object',
		properties: {
			message: { type: 'string' },
		}
	},
	200: {
		type: 'string',
		example: 'Success'
	}
};

const schema = {
	description,
	tags,
	body: bodyJsonSchema,
	querystring: queryStringJsonSchema,
	params: paramsJsonSchema,
	headers: headersJsonSchema,
	response: responseJsonSchema
};

module.exports = schema;
