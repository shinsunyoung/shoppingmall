var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res, next) {
    return res.render('signup'); // 모듈을 해석해서 뿌려준다.
});

module.exports = router;
