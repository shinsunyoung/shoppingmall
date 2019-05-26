const request = require('request');
const config = require('../../config/config-local');

module.exports.get = function (param) {
    let uri = config.api.uri + param.uri;
    let successCallback = param.successCallback || function () {
        console.log('success callback is not defined');
    };

    request.get(
        uri,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                successCallback(error, response, body);
            }
        }
    );
}


module.exports.post = function (param) {
    let uri = config.api.uri + param.uri;
    let json = { json: param.data };
    let successCallback = param.successCallback || function () {
        console.log('success callback is not defined');
    };

    request.post(
        uri,
        json,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                successCallback(error, response, body);
            }
        }
    );
}

