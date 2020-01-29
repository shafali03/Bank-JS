'use strict'

function Account() {
  this.balance = 0
}

Account.prototype.currentBalance = function(){
  return this.balance
}

Account.prototype.deposit = function(amount){
  this.balance += amount
  return this.balance
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount
  return this.balance
}