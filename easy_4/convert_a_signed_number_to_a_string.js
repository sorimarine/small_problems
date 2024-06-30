// input: number, call it `number`
// output: string representation of the number

// explicit:
// - can use the integerToString function from the previous exercise
// - can not use built-in conversion functions
// - numbers can be negative
// implicit:
// - all inputs are valid numbers
// - 0 returns "0"
// - positive numbers should have "+" in front of it

// algorithm:
// - set `prefix` equal to ""
// - if `number` is less than 0:
//   - set `prefix` = "-"
//   - set `number` equal to `number` * -1
// - set `unSignedStr` equal to the result of invoking `integerToString(`number`)`
// - return `prefix + `unsignedStr`

function integerToString(integer) {
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let integerStr = "";
  while (integer > 9) {
    let currDigit = integer % 10;
    integerStr = DIGITS[currDigit] + integerStr;
    integer = Math.floor(integer / 10);
  }
  integerStr = DIGITS[integer] + integerStr;
  return integerStr;
}

function signedIntegerToString(number) {
  if (number === 0) return "0";

  let prefix = "+";
  if (number < 0) {
    prefix = "-";
    number *= -1;
  }

  let unsignedStr = integerToString(number);
  return prefix + unsignedStr;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
