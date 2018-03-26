'use strict';

module.exports = {
	get: (req, res) => {
		res.status(200);
		res.json({
			"data": {
				"message": "You got it!"
			}
		});
		res.send();
	},
	post: (req, res) => {
		res.status(200);
		res.json(req.body)
		res.send();
	},
	update: (req, res) => {
		res.status(200);
		let result = req.body;
		result.message = "Updated successfully!";
		res.json(result);
		res.send();
	},
	delete: (req, res) => {
		res.status(200);
		let result = req.body;
		result.message = "Deleted successfully!";
		res.json(result);
		res.send();
	}
};
