const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

router.get('/', indexController.index);

router.get('/about', (req, res, next) => res.send('created from Jongho Lee'));

module.exports = router;
