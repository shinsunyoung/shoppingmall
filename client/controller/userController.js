const request = require('request');
const Q = require('q');


module.exports = {
    signUp : function (command) {
        let deferred = Q.defer();
        request.post(
            'http://localhost:8080/user/signup',
            { json: command },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    deferred.resolve(body);
                    console.log(body);
                }
            }
        );
        return deferred.promise;
    },

    getUserByEmail : function (email) {
        let deferred = Q.defer();
        request.get(
            'http://localhost:8080/user?email='+email,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    deferred.resolve(JSON.parse(body));
                    console.log(body);
                }
            }
        );
        return deferred.promise;
    }
};