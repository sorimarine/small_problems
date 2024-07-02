/*
input: array (numbers)
output: array, different

rules:
- each element in the resulting array is the amount of numbers that are smaller than the original array's element
- only count unique values

algorithm:
- transform the array, for each element:
  - filter `numbers` for values that are smaller than current element
  - remove duplicates
  - return the length of that array
- return the transformed array

- to remove duplicates(given arr):
  - declare an empty result array
  - for each value in arr:
    - if value not in result, add it to result
  return result
*/

function removeDuplicates(arr) {
  let result = [];
  arr.forEach((value) => {
    if (!result.includes(value)) {
      result.push(value);
    }
  });
  return result;
}

function smallerNumbersThanCurrent(numbers) {
  return numbers.map((number) => {
    return removeDuplicates(numbers.filter((currNum) => number > currNum))
      .length;
  });
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
