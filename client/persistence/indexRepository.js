const Q = require('q');

function index() {
    let deferred = Q.defer();
    setTimeout(() => {
        deferred.resolve('Express');
    }, 1000);
    return deferred.promise;
}

module.exports = {
    index : index
};
