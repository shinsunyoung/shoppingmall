const express = require('express');
const router = express.Router();

router.get('/signup', function (req, res, next) { // 요청 관련 정보, 요청 보낼 정보, 신경 ㄴㄴ
    return res.render('signup'); // views 파일 이름
});

module.exports = router;