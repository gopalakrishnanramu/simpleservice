'use strict';

module.exports = {
	ping: (req, res) => {
		res.json({message: 'Application Health Check OK'});
	}
};
