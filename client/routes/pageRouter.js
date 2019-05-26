const express = require('express');
const router = express.Router();

let itemController = require('../controller/itemController');

router.get('/signup', function (req, res, next) {  
    return res.render('signup'); 
});

router.get('/signin', function (req, res, next) { 
    return res.render('signin'); 
});

router.get('/logout', function (req, res, next) { 

    req.session.destroy(function (err) {
        // error !!
    })

    return res.render('signin'); 
});

router.get('/item/list', function (req, res, next) { 
    return res.render('item_list'); 
});

router.get('/item/detail', function (req, res, next) {

    let id = req.query.id;

    itemController.getItemDetail(id).then(function (response) {

        if (response === "") {
            return res.render('error', {
                message: "존재하지 않는 아이템입니다.",
                error: {
                    status: 404,
                    stack: null
                }
            });
        }

        return res.render('item_detail', {name: response.name, price: response.price}); 
    })


});

module.exports = router;