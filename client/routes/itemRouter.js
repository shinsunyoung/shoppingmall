const express = require('express');
const router = express.Router();


router.get('/all', function (req, res, next) {

    itemController.findItems()
        .then(function (response) {
            res.send(response);
    });
});