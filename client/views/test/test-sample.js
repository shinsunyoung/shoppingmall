const assert = require('assert');


describe('Test 1 - Sync', function () {
    it('Test Case 1', function () {
        assert.strictEqual(1, 1);
    });

    it('Test Case 2', function () {
        assert.strictEqual(1, 1);
    });
});

describe('Test 2 - Async', function () {
    it('setTimeout - 0.5 sec', function (done) {
        setTimeout(function(){
            assert.strictEqual(1, 1);
            done();
        }, 500);
    });

    it('setTimeout - 1 sec', function (done) {
        setTimeout(function(){
            assert.strictEqual(1, 1);
            done();
        }, 1000);
    });

    it('setTimeout - 1.5 sec', function (done) {
        setTimeout(function(){
            assert.strictEqual(1, 1);
            done();
        }, 1500);
    });
});