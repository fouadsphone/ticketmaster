var express = require('express');
var router = express.Router();
let controlerHome = require('../controllers/home');

/* GET home page. */
router.get('/', controlerHome.homelist);

module.exports = router;

