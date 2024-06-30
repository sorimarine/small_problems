// input: array of numbers, call it `nums`
// output: array with the same number of elements as input:
//   - each element's value being the running total from the original array
//
// data structures : we're dealing with arrays
//
// algorithm:
// - declare a new variable called `total` and set it to 0
// - we can transform each element `num` of the `nums` array as such:
//   - update `total` to `total` + `num`
//   - transform the element to the new `total`
// - return the transformed array

// code
function runningTotal(nums) {
  let total = 0;
  return nums.map((num) => {
    total += num;
    return total;
  });
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));
