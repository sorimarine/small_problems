/*
input: ID(number), list of transactions (array)
output: list of transactions for the specificed inventory item (array)

rules:
- transactions are objects that have properties:
  - id (number)
  - movement (string)
  - quantity (number)

algorithm:
- filter transactions array by id and return the result
*/

function transactionsFor(id, transactionsList) {
  return transactionsList.filter((transaction) => transaction.id === id);
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
