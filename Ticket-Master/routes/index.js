
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);
router.get('/', function(req, res, next) {
    res.render('index' );
  });

  /* GET home page. */
router.get('/home', indexController.home);

/* GET about page. */
router.get('/about', indexController.about);

/* GET contact page. */
router.get('/contact', indexController.contact);


module.exports = router;
