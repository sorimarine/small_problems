// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0. -- Sorim

// input: an array
// output: a number, representing the count of triple of numbers that have 2 odd numbers and 1 even.

// explicit:
// - all numbers are integers greater than 0
// - in the triple, there must be 2 odd numbers and 1 even numbers
// implicit/questions:
// - array will have at least 3 numbers

// algorithm:
// - get number of even numbers, evenCount
// - get a list of all odd numbers, oddNums
// - get the number of doubles that can be made with the odd numbers:
//   - declare count = 0
//   - iterate from index 0 to length of the array - 2, call this outer index, 'i':
//     - iterate from index `i + 1 to length of array -1:
//       - incrememt count by 1
// - set the triplesCount to eventCount * oddDoublesCount
// - return return triplesCount if it's truthy (not 0), otherwise return -1

function countDoubles(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      count += 1;
    }
  }
  return count;
}

// code
function countTriples(numbers) {
  let evenCount = numbers.filter((num) => num % 2 === 0).length;
  let oddNums = numbers.filter((num) => num % 2 === 1);
  let oddDoublesCount = countDoubles(oddNums);

  let triplesCount = evenCount * oddDoublesCount;
  return triplesCount ? triplesCount : -1;
}

// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9
