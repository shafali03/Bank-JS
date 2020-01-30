'use strict'

describe('Transaction', function() {

  var transaction

  beforeEach(function() {
    transaction = new Transaction('credit', 10);
  })

  it('has credit', function() {
    expect.transaction.credit()
  })
})