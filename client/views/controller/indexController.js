const indexService = require('../service/indexService');

function index(req, res, next) {
    return indexService.index()
        .then(input => res.render('index', {title: input}));
}

module.exports = {
    index : index
};