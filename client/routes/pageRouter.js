const express = require('express');
const router = express.Router();

let itemController = require('../controller/itemController');

router.get('/signup', function (req, res, next) { // 요청 관련 정보, 요청 보낼 정보, 신경 ㄴㄴ
    return res.render('signup'); // views 파일 이름
});

router.get('/signin', function (req, res, next) { // 요청 관련 정보, 요청 보낼 정보, 신경 ㄴㄴ
    return res.render('signin'); // views 파일 이름
});

router.get('/logout', function (req, res, next) { // 요청 관련 정보, 요청 보낼 정보, 신경 ㄴㄴ

    req.session.destroy(function (err) {
        // error !!
    })

    return res.render('signin'); // views 파일 이름
});

router.get('/item/list', function (req, res, next) { // 요청 관련 정보, 요청 보낼 정보, 신경 ㄴㄴ
    return res.render('item_list'); // views 파일 이름
});

router.get('/item/detail', function (req, res, next) { // 요청 관련 정보, 요청 보낼 정보, 신경 ㄴㄴ

    let id = req.query.id;

    itemController.getItemDetail(id).then(function (response) {

        if(response === ""){
            return res.render('error', {
                message : "존재하지 않는 아이템입니다.",
                error : {
                    status : 404,
                    stack : null
                }
            });
        }

        return res.render('item_detail', { name : response.name, price : response.price } ); // views 파일 이름
    })


});

module.exports = router;