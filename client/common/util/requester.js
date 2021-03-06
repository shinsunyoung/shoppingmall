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
    let successCallback = param.successCallback || function () {
        console.log('success callback is not defined');
    };
    let data = {};
    let dataType = param.dataType || 'json';
    data[dataType] = param.data;

    request.post(
        uri,
        data,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                successCallback(error, response, body);
            }
        }
    );
}

