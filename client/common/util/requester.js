const request = require('request');
const config = require('../../config/config-local');

module.exports.get = function (param) {
    let uri = config.api.uri + param.uri;
    let successCallback = param.successCallback;

    request.get(
        uri,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                successCallback(error, response, body);
            }
        }
    );
}