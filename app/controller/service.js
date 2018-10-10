'use strict';

module.exports = {
	get: (req, res) => {
		logger.info(req.rawBody || req.body);
		res.status(200);
		res.json({
			"data": "",
			"message": "You got it!"
		});
		res.send();
	},
	patch: (req, res) => {
		logger.info(req.rawBody || req.body);
		res.status(200);
		let result = { "data" : req.rawBody || req.body};
		result.message = "Updated successfully!";
		res.json(result);
		res.send();
	},
	post: (req, res) => {
		logger.info(req.rawBody || req.body);
		res.status(200);
		let result = { "data" : req.rawBody || req.body};
		result.message = "Added successfully!";
		res.json(result);
		res.send();
	},
	update: (req, res) => {
		logger.info(req.rawBody || req.body);
		res.status(200);
		let result = { "data" : req.rawBody || req.body};
		result.message = "Updated successfully!";
		res.json(result);
		res.send();
	},
	delete: (req, res) => {
		logger.info(req.rawBody || req.body);
		res.status(200);
		let result = { "data" : req.rawBody || req.body};
		result.message = "Deleted successfully!";
		res.json(result);
		res.send();
	}
};
