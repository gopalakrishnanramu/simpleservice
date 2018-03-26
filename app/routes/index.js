var express = require('express');
var router = express.Router();
var healthcheck = require(approot + '/app/controller/healthcheck');

/* GET / */
router.get('/', (req, res) => {
  res.json({message: 'Welcome to FourKites!'});
  res.send();
});

router.get('/healthcheck', healthcheck.ping);

module.exports = router;