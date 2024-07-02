// You are going to be given an array of integers. Your job is to take that array and find
// an index N where the sum of the integers to the left of N is equal to the sum of the
// integers to the right of N. If there is no index that would make this happen, return -1.

/*[10:57, 11:06]
input: an array of integers
output: number, the index in which the sum of all the left side of that index and the sum of the right
  are equal

rules:
- return -1 if no index can be found
- left of index 0 is sum 0
- numbers are integers that can be both positive or negative

algorithm:
- start a loop from index 0 to index length - 1 inclusive:
  - declare left = 0
  - if index > 0:
    - assign left sum(slice(0, index))
  - declare right = 0
  - if index < length - 1
    - assign right sum(slice(index + 1))
  - if the left sum is equal to the right sum, return the index
- return -1

sum(numbers):
- start at subtotal 0
- for each number, add it to subtotal
- return subtotal
*/

function sum(numbers) {
  return numbers.reduce((subtotal, currNum) => (subtotal += currNum), 0);
}

function findEvenIndex(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let left = 0;
    if (index > 0) {
      left = sum(numbers.slice(0, index));
    }

    let right = 0;
    if (index < numbers.length - 1) {
      right = sum(numbers.slice(index + 1));
    }

    if (left === right) return index;
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);
