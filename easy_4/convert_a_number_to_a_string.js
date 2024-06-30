// input: number, call it `integer`
// output: string representation of that number

// explicit:
// - do not use JavaScript built in conversion functions
// - integers are non negative values
// implicit:
// - can assume all inputs are numbers and valid
// - if integer is 0, return "0"

// data structures
// - array to access string representation of each number digit

// algorithm
// - declare an array `DIGITS`, whose elements are the string reprentation of the indices of the array
// - declare `integerStr` as ""
// - while `integer` is greater than 9:
//   - set `currDigit` = remainder of integer / 10
//   - set `integerStr` = `DIGITS[`currDigit`]` + `integerStr`
//   - set integer = integer / 10 floored
// - set `integerStr` = `DIGITS[`integer`]` + `integerStr`
// - return `integerStr`

let DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(integer) {
  let integerStr = "";
  while (integer > 9) {
    let currDigit = integer % 10;
    integerStr = DIGITS[currDigit] + integerStr;
    integer = Math.floor(integer / 10);
  }
  integerStr = DIGITS[integer] + integerStr;
  return integerStr;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1234567890));
