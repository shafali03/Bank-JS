'use strict'

function Account() {
  this.balance = 2
}

Account.prototype.currentBalance = function(){
  return this.balance
}