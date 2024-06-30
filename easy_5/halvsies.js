// input: array, call it `arr`
// output: array, containing two arrays, containing half the elements of the original array each

// explicit:
// - each of the two elements in the returned array is an array
// - first half of the original array goes in the first element of the return value
// - second half goes in the second element of the return value
// - if original array contains odd number of elements, place the middle element in the first half array
//
// implicit:
// - [] => [[], []]
// - [5] => [[5], []]

// data structures: array

// algorithm:
// - if length of `arr` is 0, return [[], []]
// - declare an empty array called `halfArrs`
// - get the midIndex by dividing the length of `arr` in 2 and round it up
// - build the first half array with elements of the original array from index 0 to `midIndex` and push it into `halfArrs`.
// - build the second half array with elements from `midIndex` to last index and push it into `halfArrs`

// code
function halvsies(arr) {
  if (arr.length === 0) return [[], []];

  let halfArrs = [];
  let midIndex = Math.ceil(arr.length / 2);

  halfArrs.push(arr.slice(0, midIndex));
  halfArrs.push(arr.slice(midIndex));
  return halfArrs;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));
