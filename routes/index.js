var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/indexController');

router.get('/', index_controller.index);

var upload_controller = require('../controllers/uploadController');

router.post('/upload', upload_controller.upload);

module.exports = router;
