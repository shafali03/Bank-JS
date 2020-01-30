'use strict'

describe('Account', function() {

  var account;

  beforeEach(function() {
    account = new Account();
  })


  it('current account balance is $0', function(){
    expect(account.currentBalance()).toEqual(0)
  });

  it('has a deposit of $10 added to the account', function(){
    account.deposit(10)
    expect(account.currentBalance()).toEqual(10)
  })

  it('can withdraw $5 from account', function() {
    account.withdraw(5)
    expect(account.currentBalance()).toEqual(-5)
  })

  it('each account has an empty array', function() {
    expect(account.transaction).toEqual([])
  })


});