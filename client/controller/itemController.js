const Q = require('q');

const requester = require('../common/util/requester');

module.exports = {
    findItems : function () {
        let deferred = Q.defer();
        requester.get({
           uri : '/item',
            successCallback : function (error, response, body) {
                if(body === ""){
                    deferred.resolve(body);
                }
                else {
                    deferred.resolve(JSON.parse(body));
                }
            }
        });
        return deferred.promise;
    },

    getItemDetail : function (id) {
        let deferred = Q.defer();

        requester.get({
            uri : `/item/detail?id=${id}`,
            successCallback : function (error, response, body) {
                if(body === ""){
                    deferred.resolve(body);
                }
                else {
                    deferred.resolve(JSON.parse(body));
                }
            }
        });
        return deferred.promise;
    }




}

