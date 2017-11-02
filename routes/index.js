var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/indexController');

router.get('/', index_controller.index);

router.post('/upload', index_controller.upload_file_post);

module.exports = router;
