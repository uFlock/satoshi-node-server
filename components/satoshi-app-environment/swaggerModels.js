"use strict";

module.exports = {
	User: {
		type: 'object',
		required: ['username', 'password', 'age', 'score'],
		properties: {
			username: { type: 'string', description: 'One word up-to 25 characters' },
			password: { type: 'string', description: 'Minimum 8 characters' },
			age: { type: 'number', description: 'Between 1 and 125' },
			score: { type: 'number', description: 'Max 1000 points' }
		}
	}
};