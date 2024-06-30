// input: two arrays, call them arr1, arr2
// output: one array, combining all elements of the array, without any duplicates

// explicit:
// - no duplicate values, even if there are duplicates in the original arrays
// - both arguments will aways be arrays
// implicit/questions:
// - Will assume here that no duplicates means that element in the returned array will have the same value

// data structures
// - array

// algorithm:
// - join the two arrays together ( JavaScript has a convenient way to do this through the ... operator ), store it in `joinedArr`
// - remove the duplicate values in `joinedArr` like this:
//   - declare an empty array called `noDupes`
//   - for each `element` in joinedArr:
//     - if `element` is in `noDupes`, continue loop
//     - add `element` to `noDupes`
// - return `noDupes`

// code

function union(arr1, arr2) {
  let joinedArr = [...arr1, ...arr2];
  let noDupes = [];
  joinedArr.forEach((element) => {
    if (noDupes.includes(element)) return;
    noDupes.push(element);
  });

  return noDupes;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
