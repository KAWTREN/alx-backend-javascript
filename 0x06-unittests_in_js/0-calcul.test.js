const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function() {
    it('should retun 4 when 1 and 3 are passed', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when 1 and 3.7 are passed', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 0 when -0.4 and 0.4 are passed', function() {
        assert.strictEqual(calculateNumber(0.4, -0.4), 0);
    });

    it('should return 6 when 1.5 and 3.7 are passed', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return NAN', function(){
        assert.strictEqual(calculateNumber(), NaN);
        assert.strictEqual(calculateNumber(1, 'r'), NaN);
        assert.strictEqual(calculateNumber('t','y'), NaN);
    });
});