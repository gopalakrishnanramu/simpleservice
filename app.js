'use strict';

/**
 * Module Dependencies (external)
 */
global.approot = require('app-root-path');
const express = require('express');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const bunyan = require('bunyan');
const config = require('config');

/**
 * Module Dependencies (internal)
 */
const index = require(approot + '/app/routes/index');
const service = require(approot + '/app/routes/service');
const appConfig = config.get('app');

/**
 * Logger Initialization
 */
global.logger = bunyan.createLogger({
	name: appConfig.name,
	streams: [
		{
			level: 'debug',
			stream: process.stdout
		},
		{
			level: 'info',
			path: `${appConfig.env}.log`
		}
	]
});

/**
 * Server Initialization
 */
const app = express();
app.set('port', appConfig.port);

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(xmlparser());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(appConfig.port, () => {
	logger.info("Listening on port " + appConfig.port);
});

app.use('/', index);
app.use('/service', service);

module.exports = app;