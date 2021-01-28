"use strict";

const uuid = require('uuid').v4;

const { User } = require('../../models');

const apiSchemas = require('./schemas');

const SERVICE_UNAVAILABLE = 'Service Unavailable';
const INVALID_CREDENTIALS = 'Invalid Credentials';
const USERNAME_TAKEN = 'Username Already Taken';
const UNAUTHORISED = 'Unauthorised';

const SUCCESS = 'Success';

module.exports = function (fastify) {
	fastify.get('/api/user/details', { schema: apiSchemas.getUserDetails }, (req, res) => getUserDetails(req, res));
	fastify.post('/api/user/register', { schema: apiSchemas.userRegister }, (req, res) => userRegister(req, res));
	fastify.post('/api/user/login', { schema: apiSchemas.userLogin }, (req, res) => userLogin(req, res));
};

async function getUserDetails(req, res) {

	let error;
	let userDetails;

	const { sessiontoken: sessionToken } = req.headers;

	try {
		userDetails = await User.findOne({ sessionToken });
	} catch (err) {
		error = SERVICE_UNAVAILABLE;
	}

	res
		.code(userDetails ? 200 : 401)
		.send(userDetails || error || UNAUTHORISED);
}

async function userRegister(req, res) {

	let error;

	const user = new User(req.body);

	try {
		await user.save();
	} catch (err) {
		error = err.code === 11000 ? USERNAME_TAKEN : SERVICE_UNAVAILABLE;
	}

	res
		.code(error ? 400 : 200)
		.send(error || SUCCESS);
}

async function userLogin(req, res) {

	let error;
	let user;

	try {

		const filter = req.body;
		const update = { sessionToken: uuid() };
		const options = { new: true };

		user = await User.findOneAndUpdate(filter, update, options);

		if (user === null) {
			error = INVALID_CREDENTIALS;
		}

	} catch(err) {
		error = SERVICE_UNAVAILABLE;
	}

	res
		.code(user ? 200 : 401)
		.send(user || error);
}
