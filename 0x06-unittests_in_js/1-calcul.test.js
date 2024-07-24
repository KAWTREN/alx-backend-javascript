const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('SUM', function(){
        assert.strictEqual(calculateNumber('SUM', 4, 5), 9);
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 0.4, -0.4), 0);
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        assert.strictEqual(calculateNumber('SUM'), NaN);
        assert.strictEqual(calculateNumber('SUM', 1, 'r'), NaN);
        assert.strictEqual(calculateNumber('SUM', 't','y'), NaN);
    });
});

describe('calculateNumber', function(){
    it('SUBTRACT', function(){

    });
});