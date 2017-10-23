const assert = require('chai').assert;
const freemail = require('../index');

describe('isFree', ()=> {

  it('should correctly determine if email account is free', () => {
    assert.equal(freemail.isFree('smith@gmail.com'), true);
    assert.equal(freemail.isFree('test@activeprospect.com'), false);
  });

  it('should correctly determine if email account is free with domain only', () => {
    assert.equal(freemail.isFree('gmail.com'), true);
    assert.equal(freemail.isFree('activeprospect.com'), false);
  });
});

describe('isDisposable', ()=> {

  it('should correctly determine if email is disposable', () => {
    assert.equal(freemail.isDisposable('smith@mailinator.com'), true);
    assert.equal(freemail.isFree('test@activeprospect.com'), false);
  });

  it('should correctly determine if email is disposable with domain only', () => {
    assert.equal(freemail.isDisposable('spamcannon.com'), true);
    assert.equal(freemail.isDisposable('gmail.com'), false);
  });
});

describe('handleFreemailValidation', () => {

  it('should return an object with appropriate keys and values', () => {
    assert.isObject(freemail.handleFreemailValidation('blake@mailinator.com'));
    assert.hasAllKeys(freemail.handleFreemailValidation('blake@mailinator.com'), ['isFree', 'isDisposable']);
    assert.isBoolean(freemail.handleFreemailValidation('blake@mailinator.com').isFree);
    assert.isBoolean(freemail.handleFreemailValidation('blake@mailinator.com').isDisposable);
  });

  it('should return the same results as isFree and isDisposable', () => {
    let disposable = {isFree: freemail.isFree('blake@mailinator.com'), isDisposable: freemail.isDisposable('blake@mailinator.com')};
    let free = {isFree: freemail.isFree('blake@gmail.com'), isDisposable: freemail.isDisposable('blake@gmail.com')};
    let paid = {isFree: freemail.isFree('test@activeprospect.com'), isDisposable: freemail.isDisposable('test@activeprospect.com')};

    assert.deepEqual(disposable, freemail.handleFreemailValidation('blake@mailinator.com'));
    assert.deepEqual(free, freemail.handleFreemailValidation('blake@gmail.com'));
    assert.deepEqual(paid, freemail.handleFreemailValidation('test@activeprospect.com'));
  });
});
