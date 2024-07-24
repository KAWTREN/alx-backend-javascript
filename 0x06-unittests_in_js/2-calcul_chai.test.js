const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');
const expect = chai.expect;


describe('calculateNumber', function() {
    describe('SUM', function() {
        it('not rounded', function() {
            expect(calculateNumber('SUM', 1, 1)).to.be.equal(2);
            expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
        });
        
        it('has decimal point >= 0.5 ', () => {
            expect(calculateNumber('SUM', 1.5, 1)).to.be.equal(3);
            expect(calculateNumber('SUM', 1, 2.6)).to.be.equal(4);
            expect(calculateNumber('SUM', 1.5, 2.6)).to.be.equal(5);
            expect(calculateNumber('SUM', 1.4, 2.6)).to.be.equal(4);
        });
        
        it('one arg has decimal point >= 0.5 ', () => {
            expect(calculateNumber('SUM', 1.4, 1)).to.be.equal(2);
            expect(calculateNumber('SUM', 1, 2.1)).to.be.equal(3);
            expect(calculateNumber('SUM', 1.4, 1.4)).to.be.equal(2);
        });
        
    });

    describe('SUBTRACT', function(){
        it('not rounded', function() {
            expect(calculateNumber('SUBTRACT', 1, 1)).to.be.equal(0);
            expect(calculateNumber('SUBTRACT', 1, 3)).to.be.equal(-2);
        });
        
        it('has decimal point >= 0.5 ', () => {
            expect(calculateNumber('SUBTRACT', 1.5, 2.6)).to.be.equal(-1);
            expect(calculateNumber('SUBTRACT', 1.4, 2.6)).to.be.equal(-2);
        });
        
        it('one arg has decimal point >= 0.5 ', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 1)).to.be.equal(0);
            expect(calculateNumber('SUBTRACT', 1, 2.1)).to.be.equal(-1);
            expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.be.equal(0);
        });
        
    });

    describe('DIVIDE', function() {
        it('not rounded', () => {
            expect(calculateNumber('DIVIDE', 1, 1), 1);
            expect(calculateNumber('DIVIDE', 1, 3), 1 / 3);
            expect(calculateNumber('DIVIDE', 1.5, 2), 1);
        });      
    });

    describe('Error', function() {
        it('Error', () => {
            expect(calculateNumber('DIVIDE', 1, 0), 'Error');
            expect(calculateNumber('not a type', 1, 3), 'Error');
            expect(calculateNumber('DIVIDE', 1, 0.4), 'Error');
        });
    });
});