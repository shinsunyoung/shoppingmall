const request = require('request');
const Q = require('q');
const config = require('../config/config-local');
const requester = require('../common/util/requester');

module.exports = {
    signUp : function (command) {
        let deferred = Q.defer();
        requester.post({
            uri :  '/user/signup',
            data : command,
            successCallback : function (error, response, body) {
                deferred.resolve(body);
            }
        });
        return deferred.promise;
    },

    getUserByEmail : function (email) {
        let deferred = Q.defer();
        requester.get({
            uri :  `/user?email=${email}`,
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
};