const User = require('../models').User;

function getUsers() {
    return User.findAll();
}

module.exports = {
    getUsers: getUsers
};