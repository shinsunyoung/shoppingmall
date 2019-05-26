const request = require('request');
const Q = require('q');
const config = require('../config/config-local');

module.exports = {
    signUp : function (command) {
        let deferred = Q.defer();
        request.post(
            config.api.uri + '/user/signup',
            { json: command },
            function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    deferred.resolve(body);
                }
            }
        );
        return deferred.promise;
    },

    getUserByEmail : function (email) {
        let deferred = Q.defer();
        request.get(
            config.api.uri + `/user?email=${email}`,
            function (error, response, body) {
                if (!error && response.statusCode === 200) {
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
};