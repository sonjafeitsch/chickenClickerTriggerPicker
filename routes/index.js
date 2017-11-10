var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/indexController');
var upload_controller = require('../controllers/uploadController');

router.get('/', index_controller.index);

router.post('/upload', upload_controller.upload);

module.exports = router;
