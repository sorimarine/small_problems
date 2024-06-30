// input: string, call it numStr
// output: number

// explicit:
// - don't use built-in conversion methods available in JavaScript
// - there may be + or - signs
// - there will not be invalid characters. string always contain a valid number
//
// implicit:

// data structures:
// - Array is good for working with individual characters of a string

// algorithm:
// - declare an `DIGITS` object that maps the string representation of a single digit integer to its number equivalent
// - declare `num` as 0
// - declare `modifier` as 1
// - remove '+' or '-' signs from `numStr`, call it `unsignedNumStr` like this:
//   - if the first character of `numStr` exists in `DIGITS`, set `unsignedNumStr` to `numStr`
//   - otherwise, set `unsignedNumStr` the substring of numStr starting from index 1
// - iterate over each character in `unsignedNumStr` in reverse over:
//   - get the number representation of the character through `DIGITS`, call it `digitValue`
//   - set `num` equal to `num` + `digitValue` * modifier
//   - set modifier equal to modifier * 10
// - if first character of `numStr` is '-' return `num` * -1, otherwise, return `num`

// code
function stringToSignedInteger(numStr) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let num = 0;
  let modifier = 1;
  let unsignedNumStr = DIGITS[numStr[0]] ? numStr : numStr.slice(1);
  unsignedNumStr
    .split("")
    .reverse()
    .forEach((digit) => {
      let digitValue = DIGITS[digit];
      num += digitValue * modifier;
      modifier *= 10;
    });

  return numStr[0] === "-" ? num * -1 : num;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
