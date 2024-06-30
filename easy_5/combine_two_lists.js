// input: two arrays, call them `arr1`, `arr2`
// output: one array, containing all elements from both arrays, with each element taken in alternation

// explicit:
// - both arrays are non-empty
// - the arrays have the same number of elements
// implicit:
// - the first element is from the first array

// data structures: array

// algorithm:
// - declare an empty array called `resultArr`
// - iterate starting from index 0 to the length of `arr1` - 1:
//   - push element at current index of `arr1` onto `resultArr`
//   - push element at current index of `arr2` onto `resultArr`
// - return `resultArr`

// code
function interleave(arr1, arr2) {
  let resultArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr1[i]);
    resultArr.push(arr2[i]);
  }
  return resultArr;
}

console.log(interleave([1, 2, 3], ["a", "b", "c"]));
