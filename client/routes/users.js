var express = require('express');
var router = express.Router();

var userController = require('controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  userController.signUp({
      name : name,
      email : email,
      password : password
  }).then(function (response) {
      res.send(response);
  });

});

module.exports = router;
