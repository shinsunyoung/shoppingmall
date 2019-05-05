const indexService = require('../service/indexService');

function index() {
    return indexService.index()
        .then(input => ({
            title: input
        }));
}

module.exports = {
    index : index
};