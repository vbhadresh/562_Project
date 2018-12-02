var express = require('express');
var router = express.Router();
var emailVerification = require('../routes/emailVerification');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send',emailVerification);
router.get('/newuser',function(req,res,next){
  res.render('form');
});
router.get('/payment',function(req,res,next){
  res.render('payment');
});

router.get('/login',function(req,res,next){ 
  res.render('login');
});
module.exports = router;
