var express = require('express');
var router = express.Router();
var service = require(approot + '/app/controller/service');

/* Routing */
router.get('/', service.get);
router.post('/', service.post);
router.patch('/', service.patch);
router.put('/', service.update);
router.delete('/', service.delete);

module.exports = router;
