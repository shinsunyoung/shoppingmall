const request = require('request');
const Q = require('q');
const config = require('../config/config-local');


module.exports = {

    findItems : function () {
        let deferred = Q.defer();
        request.get(
            config.api.uri + '/item',
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if(body === ""){
                        deferred.resolve(body);
                    }
                    else {
                        deferred.resolve(JSON.parse(body));
                    }
                }
            }
        );
        return deferred.promise;
    },

    getItemDetail : function (id) {
        let deferred = Q.defer();

        request.get(
            config.api.uri + `/item/detail?id=${id}`,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if(body === ""){
                        deferred.resolve(body);
                    }
                    else {
                        deferred.resolve(JSON.parse(body));
                    }
                }
            }
        );
        return deferred.promise;
    }




}

