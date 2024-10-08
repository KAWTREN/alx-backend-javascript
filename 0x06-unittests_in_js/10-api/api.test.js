const request = require('request');
const assert = require('assert');
describe('home', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should return Welcome to the payment system', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      assert.equal(body, 'Welcome to the payment system');
      done();
    });
  });

  it('should return 404', (done) => {
    request('http://localhost:7865/any_endpoint', (err, res, body) => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});

describe('cart', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should return Payment methods for cart 12', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      assert.equal(body, 'Payment methods for cart 12');
      done();
    });
  });

  it('should return 404', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});

describe('available_payments', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should return object', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      assert.deepEqual(JSON.parse(body), {
        payment_methods: { credit_cards: true, paypal: false },
      });

      done();
    });
  });
});

describe('login', () => {
  it('should return 200', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'Betty' } },
      (err, res, body) => {
        assert.equal(res.statusCode, 200);
        assert.equal(body, 'Welcome Betty');
        done();
      }
    );
  });
});