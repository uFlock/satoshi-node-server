"use strict";

const env = global.env || 'LOCAL';

const os = require('os');

const environment = {
	LIVE: {
		mongodb: {
			env,
			baseUrl: "mongodb://localhost:27017/",
			servers: [
				{ "server": 'localhost', "port": 27017 },
			],
			poolSize: 10,
			collections: {
				profiles: {
					database: "simpleClick",
					collection: "profiles"
				}
			}
		},
		satoshi: {
			hostname: os.hostname(),
			port: 1337
		}
	},
	LOCAL: {
		mongodb: {
			env,
			baseUrl: "mongodb://localhost:27017/",
			servers: [
				{ "server": 'localhost', "port": 27017 },
			],
			poolSize: 10,
			collections: {
				profiles: {
					database: "simpleClick",
					collection: "profiles"
				}
			}
		},
		satoshi: {
			allowCors: true,
			hostname: os.hostname().toLowerCase(),
			port: 1337
		}
	}
};

module.exports = {
	getMongo: () => environment[env].mongodb,
	getSatoshi: () => environment[env].satoshi,
};

