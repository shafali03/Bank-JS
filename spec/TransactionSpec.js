'use strict'

describe('Transaction', function() {

  var transaction

  beforeEach(function() {
    transaction = new Transaction('credit', 20, 10);
  })

  it('has credit of $20', function() {
    expect(transaction.credit).toEqual(20)
  })
})