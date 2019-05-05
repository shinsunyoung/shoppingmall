const Q = require('q');

function index() {
    let deferred = Q.defer();
    setTimeout(() => {
        deferred.resolve('Hello');
    }, 1000);
    return deferred.promise;
}

module.exports = {
    index : index
};
