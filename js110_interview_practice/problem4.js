/*
input: array of integers
output: array of 2 integers that are closest together in value

rules:
- if there are multiple pairs that are equally close, return the one that came first

algorithm:
- get an array of all pairs:
  - declare an empty result array
  - iterate through array from index 0 to length of array - 2, call index i:
    - iterate through thr array from i+1 to length -1, call index j:
      - push [arr[i], arr[j]] into result array
  - return result
- get the absolute difference of each pair and store it as a property:
  - return absolute value of first element minus second rlement
- declare closest array to be pair at index 0
- iterate through the array of pairs starting from index 1 to the length -1:
  - if absolute difference of this pair is lower than absolute difference of closest
  - set closest to current pair
- return closest
*/

function closestNumbers(numbers) {
  let allPairs = getAllPairs(numbers);
  let closest = allPairs[0];

  for (let i = 1; i < allPairs.length; i += 1) {
    if (absoluteDifference(allPairs[i]) < absoluteDifference(closest)) {
      closest = allPairs[i];
    }
  }

  return closest;
}

function absoluteDifference(arr) {
  return Math.abs(arr[0] - arr[1]);
}

function getAllPairs(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      result.push([numbers[i], numbers[j]]);
    }
  }
  return result;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
