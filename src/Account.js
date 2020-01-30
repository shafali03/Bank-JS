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
  // this.transaction.push(new transaction('credit', amount, this.balance ))
  
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount
  return this.balance
}

// Account.prototype.trans = function(){
//   this.transaction.push +='credit', amount
// }
