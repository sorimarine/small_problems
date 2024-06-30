// input: array of integers, call it `integers`
// output: string

// explicit:
// - three decimal places
// - all elements in the array are integers
// - to get the result, mulplie all the integers together and divide it by the number of elements in the array

// implicit:
// - will assume that the input array won't be empty

// data structures: array

// algorithm:
// - declare and set `product` to 1
// - for each `integer` in the `integers`:
//   - set `product` to `product1` * `integer`
// - set `average` to `product` / length of `integers`
// - return the average as a string, rounded to 3 decimal places

// code
function multiplicativeAverage(integers) {
  let product = 1;
  integers.forEach((integer) => {
    product *= integer;
  });
  let average = (product / integers.length) * 1000;
  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
