/*[6:35, 6:41]
input: array (of integers)
output: the integer that appears an odd number of times

rules:
- there will always be exactly one such integer

algorithm:
- iterate from index 0 of the numbers array to length - 1:
  - filter the array to only numbers identical to the number at this index
  - if the length of that array is odd, return the number
*/

function oddFellow(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let count = numbers.filter((number) => number === numbers[index]).length;

    if (count % 2 === 1) return numbers[index];
  }
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
