'use strict'

function Account() {
  this.balance = 0
  this.transaction = []
}

Account.prototype.currentBalance = function(){
  return this.balance
}

Account.prototype.deposit = function(amount){
  this.balance += amount
  this.transaction.push(new Transaction('credit', amount, this.balance))
  return this.balance
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount
  this.transaction.push(new Transaction('debit', amount, this.balance))

  return this.balance
}
