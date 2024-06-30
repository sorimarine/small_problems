// input: array of integers, call it `integers`
// output: integer, average of all integers in the array

// explicit:
// - round the average down to the integer component (floor it)
// - the given array is never empty
// - numbers in array is always positive
// implicit:
// -

// algorithm:
// - get the sum of the numbers in the array and set it to `sum`:
//   - declare `sum` and set its value to 0
//   - for each `integer` in `integers:
//     - set `sum` to `sum` + `integer`
// - divide `sum` by the length of the array, floor it and return that result

// code
function average(integers) {
  let sum = 0;
  integers.forEach((integer) => {
    sum += integer;
  });
  return Math.floor(sum / integers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));
