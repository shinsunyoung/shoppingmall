const assert = require('assert');
const userRepository = require('../../persistence/userRepository');

describe('userRepository', () => {
    it('should return 2 elements when call userCategories', function (done) {
        userRepository.getUsers().then((val) => {
            assert.strictEqual(val[0].id, 1);
            assert.strictEqual(val[0].name, '이종호');
            done();
        })
    });
});