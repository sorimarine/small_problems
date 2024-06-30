// code
function countTriples(numbers) {
  let oddNums = numbers.filter((num) => num % 2 === 1);
  let evenNums = numbers.filter((num) => num % 2 === 0);

  let oddDoublesCount = 0;
  for (let i = 0; i < oddNums.length - 1; i += 1) {
    for (let j = i + 1; j < oddNums.length; j += 1) {
      oddDoublesCount += 1;
    }
  }
  console.log(oddDoublesCount * evenNums.length);
}

// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9
