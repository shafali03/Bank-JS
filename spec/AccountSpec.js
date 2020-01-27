'use strict'

describe('Account', function() {

  var account;

  it('current account balance is $0', function(){
    account = new Account();
    expect(account.currentBalance()).toEqual(0)
  });

  it('has a deposit of $10 has been added to the account', function(){
    account = new Account();
    account.deposit()
    expect(account.currentBalance()).toEqual(10)
  })

});