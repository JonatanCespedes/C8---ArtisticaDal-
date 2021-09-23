var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController');
let cookieCheck = require('../middlewares/cookieCheck');

/* GET - Home */
router.get('/', cookieCheck,controller.index)

module.exports = router;
