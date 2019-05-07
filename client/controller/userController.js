const request = require('request');
const Q = require('q');

module.exports = {
    signUp : function (command) {
        let deferred = Q.defer();
        request.post(
            'http://localhost:8080/user/signup',
            {json: command}, // json형식으로 command꺼 자동 매핑
            function (error,  response, body) {
                if (!error && response.statusCode == 200) {
                    deferred.resolve(body); // 성공했을 때 전달해주는 값
                    console.log(body);
                }
            }
        )

    }
}