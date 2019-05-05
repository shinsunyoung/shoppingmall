const userRepository = require('../persistence/userRepository');

function getUsers() {
    return userRepository.getUsers();
}

module.exports = {
    getUsers: getUsers
};