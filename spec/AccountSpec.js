'use strict'

describe('Account', function() {

  var account;

  it('the current account balance is $2', function() {
    account = new Account();
    expect(account.currentBalance()).toEqual(2)
  });
});