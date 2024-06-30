/*
input: BigInt, specificying number of digits
output: BigInt, the index of the first fibonacci number with that number of digits

rules:
- first number has an index of 1
- all arguments an integer >= 2
- next fibonacci is the curr + prev

algorithm (numDigits):
- set index = 2n
- set minNum = 10^(numDigits - 1)n
- set prev = 1n
- set curr = 1n
- while (curr < minNum):
  - [curr, prev] = [prev + curr, curr]
  - increment index by 1
- return index
}
*/

function findFibonacciIndexByLength(numDigits) {
  let index = 2n;
  let minNum = 10n ** (numDigits - 1n);
  let prev = 1n;
  let curr = 1n;

  while (curr < minNum) {
    [curr, prev] = [curr + prev, curr];
    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
