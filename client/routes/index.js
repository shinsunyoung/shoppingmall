const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

router.get('/', (req, res, next) => indexController.index()
    .then(input => res.render('index', input))
);

router.get('/about', (req, res, next) => res.send('created from Jongho Lee'));

module.exports = router;
