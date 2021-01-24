"use strict";

const fakeMongo = [];

module.exports = function (fastify) {
	fastify.post('/api/user/register', (req, res) => userRegister(req, res));
	fastify.post('/api/user/login', (req, res) => userLogin(req, res));
};

function userRegister(req, res) {

	let error;

	const body = req.body;
	const alreadyExists = fakeMongo.filter(user => user._id === body._id).length > 0;

	if (alreadyExists) {
		error = 'User already registered.';
	} else {
		fakeMongo.push(body);
	}

	res
			.code(error ? 400 : 200)
			.send(error || body);
}

function userLogin(req, res) {

	const {name, password} = req.body || {};

	if (name && password) {

		const registeredUsers = fakeMongo.filter(user => user.name === name && user.password === password);
		const user = registeredUsers[0];

		res
				.code(user ? 200 : 400)
				.send(user || 'Invalid Credentials');
	}
}
