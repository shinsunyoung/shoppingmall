const request = require('request');
const Q = require('q');


module.exports = {

    findItems : function () {
        let deferred = Q.defer();
        request.get(
            'http://localhost:8080/item',
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
            'http://localhost:8080/item/detail?id='+id,
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

