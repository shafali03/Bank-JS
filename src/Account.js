'use strict'

function Account() {
  this.balance = 10
  this.balance += 5
  this.balance -= 5
}

Account.prototype.currentBalance = function(){
  return this.balance
}

Account.prototype.deposit = function(){
  this.balance += 5
}

Account.prototype.withdraw = function() {
  this.balance -= 5
}