/*
input: array of numbers
output: number, the smallest sum of 5 consecutive numbers in the array

rules:
- return null if less than 5 elements
- there can be negative numbers and negative return values

algorithm:
- if length is less than 5, return null
- get all combinations of 5 consecutive elements and put them in an array, combos:
  - iterate from index 0 to index length - 5:
  - add a slice of the numbers array from current index to current index + 5
- transform the combos like this:
  - return the sum all the element in that combo
- return the smallest value of the transformed array

to find sum:
- start with subtotal at 0
- for each element in the array, add it to subtotal
- return subtotal
*/

function sum(numbers) {
  return numbers.reduce((subtotal, curr) => (subtotal += curr), 0);
}

function minimumSum(numbers) {
  if (numbers.length < 5) return null;

  let combos = [];
  for (let i = 0; i <= numbers.length - 5; i += 1) {
    combos.push(numbers.slice(i, i + 5));
  }

  return Math.min(...combos.map((combo) => sum(combo)));
}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
