'use strict'

describe('Account', function() {

  var account;

  beforeEach(function() {
    account = new Account();
  })


  it('current account balance is $10', function(){
    expect(account.currentBalance()).toEqual(10)
  });

  it('has a deposit of $5 added to the account', function(){
    account.deposit()
    expect(account.currentBalance()).toEqual(15)
  })

  it('can withdraw $5 from account', function() {
    account.withdraw()
    expect(account.currentBalance()).toEqual(5)
  })

});