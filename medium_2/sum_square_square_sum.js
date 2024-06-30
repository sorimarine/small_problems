/*
input: number (`count`)
output: number, square of sum - sum of squares

rules:
- output the square of the sum of the first `count positive` integers - the sum of squares

algorithm:
- get a list of the first `count` positive integers
  - declare an empty array, call it numbers
  - iterate `num` from 1 to the `count` inclusive:
    - push `num` into the numbers array

- compute squareOfsum:
  - declare sum = 0
  - for each number in numbers:
    - add number to sum
  - return sum**2

- compute sumOfSquares:
  - declare sumOfSquares = 0;
  - for each number in numbers:
    - add number**2 to sumOfSquares
  - return sumOfSquares

- return quareOfSum - sumOfSquares

*/

function squareOfsum(numbers) {
  return numbers.reduce((subTotal, currNum) => currNum + subTotal, 0) ** 2;
}

function sumOfSquares(numbers) {
  return numbers.reduce((subTotal, currNum) => subTotal + currNum ** 2, 0);
}

function getIntegers(count) {
  let numbers = [];
  for (let num = 1; num <= count; num += 1) {
    numbers.push(num);
  }
  return numbers;
}

function sumSquareDifference(count) {
  let numbers = getIntegers(count);
  return squareOfsum(numbers) - sumOfSquares(numbers);
}
console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
