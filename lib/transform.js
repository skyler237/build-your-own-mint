const moment = require('moment')

exports.transformTransactionsToUpdates = function(transactions) {
  /**
   * Implement your custom logic of transforming transactions into
   * Google Sheet cell updates.
   *
   * Transactions come in the format of:
   * {
   *   account: 'paypal',
   *   name: 'Payment from XXX',
   *   date: 2019-xx-xx,
   *   amount: 123
   * }
   *
   * Updates should be in the form of:
   * {
   *   range: 'A1:B2',
   *   values: [[1,2],[3,4]]
   * }
   *
   * Example: Put each transaction on a line in the spreadsheet.
   * const updates = transactions.map(function(transaction, i) {
   *   return {
   *     range: `A${i + 1}:D${i + 1}`,
   *     values: [Object.values(transaction)]
   *   }
   * });
   *
   */

  // See example in comment above.
  const updates = transactions.map(function(transaction, i) {
    return {
      range: `A${i + 2}:G${i + 2}`,
      values: [[transaction.date, 
                transaction.name, 
                transaction.amount, 
                transaction.category, 
                transaction.subcategory,
                transaction.account, 
                transaction.pending]]
    }
  });

  updates.push({
      range: `A1:G1`,
      values: [['Date', 'Name', 'Amount', 'Category', 'Subcategory', 'Account', 'Pending']]
  })

  console.log('DEBUG: updates to be made:')
  console.log(updates)

  return updates
}
