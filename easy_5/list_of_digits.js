// input: number, positive integer
// output: array, list of inividual digits in the given number

// explicit:
// - number is positive
// implicit:
// - argument is always given
// - single-digit number returns an array still. ie 7 => [7]
// - elements in the return array are numbers (not strings)

// algorithm:
// - declare empty array `digits`
// - split the number into individual digits by:
//   - convert number to string
//   - split converted string into array of characters representing the digits
//   - convert each digit into number
// - set the result to `digits`

// code
function digitList(number) {
  return String(number)
    .split("")
    .map((digit) => Number(digit));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
