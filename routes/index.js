var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', info: 'Welcome to an Express-Sessions Demo!' });
});

router.get('/session-in', function(req, res, next) {
  req.session.secret = 'be bop a lula';
  res.render('index',{ title: 'Session In', info: 'Logged In to a session. Go to /session-out to see your secret!' });
});

router.get('/session-out', function(req, res, next) {
  res.render('index', { title: req.session.secret, info: 'Mamba Out' });
});

module.exports = router;
