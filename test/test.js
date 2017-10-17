const assert = require('chai').assert;
const freemail = require('../index');

describe('Freemail', ()=> {

  it('should correctly determine if email account is free', () => {
    assert.equal(freemail.isFree('smith@gmail.com'), true);
    assert.equal(freemail.isFree('test@activeprospect.com'), false);
  });

  it('should correctly determine if email account is free with domain only', () => {
    assert.equal(freemail.isFree('gmail.com'), true);
    assert.equal(freemail.isFree('activeprospect.com'), false);
  });

  it('should correctly determine if email is disposable', () => {
    assert.equal(freemail.isDisposable('smith@mailinator.com'), true);
    assert.equal(freemail.isFree('test@activeprospect.com'), false);
  });

  it('should correctly determine if email account is disposable with domain only', () => {
    assert.equal(freemail.isDisposable('spamcannon.com'), true);
    assert.equal(freemail.isDisposable('gmail.com'), false);
  });

});
