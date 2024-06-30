/*
input: (array, array)
output: array

rules:
- neither input is an empty array
- input arrays have a list of numbers
- output array contains the products of all combinations of numbers pairs that exist between the two arrays
- sort the returned array in ascending numerical order

algorithm:
- declare an empty array to store the products
- for each number, call it `num1` in the first array input:
  - for each number, call it `num2` in the second array input
    - push (`num1` * `num2`) to the products array
- sort the products array numerically
- return the products array
*/

function multiplyAllPairs(numbers1, numbers2) {
  let products = [];
  numbers1.forEach((num1) => {
    numbers2.forEach((num2) => {
      products.push(num1 * num2);
    });
  });
  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
