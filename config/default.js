'use strict';

module.exports = {
	app: {
		name: 'sampleservice',
		env: process.env.NODE_ENV || 'development',
		host: 'localhost',
		port: process.env.APP_PORT || 3000,
	}
};