'use strict';

module.exports = {
	app: {
		env: process.env.NODE_ENV || 'testing',
		host: 'localhost',
		port: process.env.APP_PORT || 3000,
	}
};