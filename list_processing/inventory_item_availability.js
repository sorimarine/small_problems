/*
input: item id (number), list of transactions (array)
output: whether or not an item is available (boolean)

rules:
- an item is available only if the sum of the item's quantity is greater than 0
- an 'in' item means + quantity, an 'out' item means - quantity

algorithm:
- get a list of transactions for the item (use the function we already made)
- calculate the item's quantity:
  - declare quantity = 0
  - for each transaction in the array:
    - declare modifier = 1 if movement 'in', -1 otherwise
    - quantity = quantity + the transaction's quantity * modifier
- return true if item's quantity is greater than 0, false otherwise
*/

// previously made
function transactionsFor(id, transactionsList) {
  return transactionsList.filter((transaction) => transaction.id === id);
}

// this exercise
function isItemAvailable(id, transactionsList) {
  let transactionsForItem = transactionsFor(id, transactionsList);
  let quantity = 0;

  transactionsForItem.forEach((transaction) => {
    let modifier = transaction.movement === "in" ? 1 : -1;
    quantity += transaction.quantity * modifier;
  });
  return quantity > 0;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
