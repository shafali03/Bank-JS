

class Transaction {
  constructor(type, amount, balance) {
      this.credit = 0;
      this.debit = 0;
      this.balance = balance;
      type === 'debit' ? this.debit = amount : this.credit = amount
  }
}