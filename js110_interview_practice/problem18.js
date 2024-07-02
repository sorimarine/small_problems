/*[6:13, 6:30]
input: array (of integers)
output: number (index at which the sum of the numbers before it is equal to the sum of the numbers after it)

rules:
- if there is no such index, return -1
- just get the first index that this is true for
- sum of numbers of left of index 0 is 0
- sum of numbers right the last element is 0

algorithm:
- start a loop from index 0 to index length - 1 inclusive:
  - declare left = 0
  - if index not 0:
    - for each number in slice(0, index - 1):
      - add the number to left
  - declare right = 0
  - if index < length - 1:
    - for each number in slice(index + 1):
      - add the number to right
  - if left === right, return index
- return -1

*/

function equalSumIndex(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let left = 0;
    if (index > 0) {
      numbers.slice(0, index).forEach((number) => {
        left += number;
      });
    }

    let right = 0;
    if (index < numbers.length) {
      numbers.slice(index + 1).forEach((number) => {
        right += number;
      });
    }

    if (left === right) {
      return index;
    }
  }

  return -1;
}

// console.log(equalSumIndex([1, 2, 4, 4, 2, 3, 2]));

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
