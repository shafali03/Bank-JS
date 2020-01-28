'use strict'

describe('Account', function() {

  var account;

  it('current account balance is $10', function(){
    account = new Account();
    expect(account.currentBalance()).toEqual(10)
  });

  it('has a deposit of $5 added to the account', function(){
    account = new Account();
    account.deposit()
    expect(account.currentBalance()).toEqual(15)
  })

  it('can withdraw $5 from account', function() {
    account = new Account();
    account.withdraw()
    expect(account.currentBalance()).toEqual(5)
  })

});