const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

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
    let email = req.body.email; // 사용자가 넘겨준 값
    let password = req.body.password;

    userController.getUserByEmail(email).then(function (response) {
        if(password === response.password){
            req.session.user = {
                id : response.id, // 스프링이 넘겨준 값
                email : response.email,
                name : response.name
            };
            res.send(true);
        }
        else {
            res.send(false);
        }
    });
});


module.exports = router;
