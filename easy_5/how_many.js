// input: array, call it arr
// output (logs onto console):
// - element => number of occurrences of the element in the array

// explicit:
// - the words are case sensitive e.g. ("suv" !== "SUV")
// implicit:

// data structure: array, object

// algorithm:
// - declare and empty object `occurrences`
// - for each `element` in `arr`:
//   - if `occurrences` does not have `element` as a property, set that property with the value of 1
//   - else, increment the value of that property by 1
// - for each `key` in `occurrences`:
//   - print out `key` and the value of occurrences at that key in this format ( `key` => value at `key`)

// code
function countOccurrences(arr) {
  let occurrences = {};
  arr.forEach((element) => {
    if (!occurrences[element]) {
      occurrences[element] = 1;
    } else {
      occurrences[element] += 1;
    }
  });

  for (let key in occurrences) {
    console.log(`${key} => ${occurrences[key]}`);
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
