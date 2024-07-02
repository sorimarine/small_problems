/*
input: array (of integers)
output: number (of identical pairs of integers in that array)

rules:
- if the array is of length 1 or less, return 0
- even with the same number, count each complete pair once
- complete pair means a pair of identical numbers

data structure:
- an object to store the amount of times a number occurs

algorithm:
- declare an empty object to keep count of how many times a certain number occurs, let's call it `count`
- for each number in the array:
  - if count[number] exists, increment it by 1
  - else, set it to 1
- declare numPairs to keep track of how many identical pairs we have, initialize it to 0
- for each `num` in `count:
  - add the count[num]/2, floored to numPairs
- return numPairs
*/

function pairs(numbers) {
  let count = {};
  numbers.forEach((number) => {
    if (count[number]) {
      count[number] += 1;
    } else {
      count[number] = 1;
    }
  });

  let numPairs = 0;
  for (let num in count) {
    numPairs += Math.floor(count[num] / 2);
  }

  return numPairs;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);
