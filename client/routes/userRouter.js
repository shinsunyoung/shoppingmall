var express = require('express');
var router = express.Router();

let userController = require('../controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function (req, res, next) {
    let email = req.body.email;
    let name = req.body.name;
    let password = req.body.password;

    userController.signUp({
        email : email,
        name : name,
        password : password
    }).then(function (response) {
        res.send(response);
    });
});

router.post('/signin', function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    userController.getUserByEmail(email).then(function (response) {

        if(password === response.password){
            res.send(true);
        }
        else {
            res.send(false);
        }

        //res.send(response);

    });
});

module.exports = router;
