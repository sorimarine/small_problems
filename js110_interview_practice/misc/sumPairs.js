// 1
// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

//Example:

//console.log(sumPairs([4, 3, 2, 3, 4],         6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.

/*[10:05, 10:25]
input: array (numbers), number (requiredSum)
output: array (of the first two values to add up to the second input)

rules:
- if there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution

algorithm:
- declare a combosIndices array to be empty
- start a loop from `i` = 0 to length of the array - 2, inclusive:
  - start a loop from `j` = `i` + 1 to the length of the array - 1, inclusive:
    - push [i, j] into combosIndices;
- filter the combosIndices using this criterion:
  - numbers[comboIndex[0]] + numbers[comboIndex[1]] equal to requiredSum
- declare returnPair = undefined
- for each comboIndex in the filtered array:
    - if (returnPair is undefined or if comboIndex[1] < returnPair[1]) {
      set returnPair to comboIndex
- return returnPair
*/

function sumPairs(numbers, requiredSum) {
  let combosIndices = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      combosIndices.push([i, j]);
    }
  }

  let returnPairIndices = undefined;
  combosIndices
    .filter(
      (comboIndex) =>
        numbers[comboIndex[0]] + numbers[comboIndex[1]] === requiredSum
    )
    .forEach((comboIndex) => {
      if (!returnPairIndices || comboIndex[1] < returnPairIndices[1]) {
        returnPairIndices = comboIndex;
      }
    });

  return returnPairIndices
    ? [numbers[returnPairIndices[0]], numbers[returnPairIndices[1]]]
    : returnPairIndices;
}

//Test cases
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]
