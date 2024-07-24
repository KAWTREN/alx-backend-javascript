const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('not rounded', function() {
            assert.strictEqual(calculateNumber('SUM', 1, 1), 2);
            assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        });
        
        it('has decimal point >= 0.5 ', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 1), 3);
            assert.strictEqual(calculateNumber('SUM', 1, 2.6), 4);
            assert.strictEqual(calculateNumber('SUM', 1.5, 2.6), 5);
            assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
        });
        
        it('one arg has decimal point >= 0.5 ', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 1), 2);
            assert.strictEqual(calculateNumber('SUM', 1, 2.1), 3);
            assert.strictEqual(calculateNumber('SUM', 1.4, 1.4), 2);
        });
        
    });

    describe('SUBTRACT', function(){
        it('not rounded', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 1), 0);
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
        });
        
        it('has decimal point >= 0.5 ', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.6), -1);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -2);
        });
        
        it('one arg has decimal point >= 0.5 ', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1), 0);
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 2.1), -1);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
        });
        
    });

    describe('DIVIDE', function() {
        it('not rounded', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1, 1), 1);
            assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 1 / 3);
            assert.strictEqual(calculateNumber('DIVIDE', 1.5, 2), 1);
        });      
    });

    describe('Error', function() {
        it('Error', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
            assert.strictEqual(calculateNumber('not a type', 1, 3), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 1, 0.4), 'Error');
        });
    });
});