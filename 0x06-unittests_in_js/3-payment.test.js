(async () => {
    const chai = await import('chai');
    const sinon = await import('sinon');
    const { expect } = chai;
    const Utils = require('./utils.js');
    const spy = sinon.spy(Utils, calculateNumber);
    const sendPaymentRequestToApi = require('./3-payment.js');

    describe('sendpaymentRequestToApi', function() {
        it('spy', function() {
            sendPaymentRequestToApi(100, 20);
            expect(spy.calledOnce).to.be.true;
            expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        });
    });
})();
