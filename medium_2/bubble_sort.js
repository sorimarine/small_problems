/*
input: array of numbers or strings
output: array, sorted in ascending order

rules:
- use bubble sort
- take multiple iterations through the array
  - on each pass, compare each pair of consecutive element and swap if the first value is greater than the second
  - this process is repeated until a complete pass is made without performing any swaps
- sort in-place

algorithm:
- declare swapped and set it to true
- while swapped is true:
  - set swapped to false
  - iterate from index 0 to length of the array - 2:
    - declare first = the element at the index
    - declare second = the element at index + 1
    - if first > second:
      - swap the elements
      - set swapped to true
- return the array
*/

function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i += 1) {
      let [first, second] = [arr[i], arr[i + 1]];

      if (first > second) {
        [arr[i], arr[i + 1]] = [second, first];
        swapped = true;
      }
    }
  }

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
