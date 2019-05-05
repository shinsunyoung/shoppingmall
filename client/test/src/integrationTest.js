const controller = require('../../controller/indexController');
const assert = require('assert');

describe('IndexController', function () {
    it('Index', function (done) {
        controller.index().then(input => {
            assert.strictEqual(input.title, 'Express');
            done();
        });
    });
});