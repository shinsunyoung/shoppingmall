var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function (req, res, next) {

    let email = req.body.email;
    let name = req.body.name;
    let password = req.body.password;

    res.send(true);
});


module.exports = router;
