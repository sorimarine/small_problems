// input: string, call it numStr
// output: number

// explicit:
// - don't use built-in conversion methods available in JavaScript
// - no + or - signs
// - there will not be invalid characters. assume all characters are numeric
//
// implicit:

// data structures:
// - Array is good for working with individual characters of a string

// algorithm:
// - declare an `DIGITS` object that maps the string representation of a single digit integer to its number equivalent
// - declare `num` as 0
// - declare `modifier` as 1
// - iterate over each character in `numStr` in reverse over:
//   - get the number representation of the character through `DIGITS`, call it `digitValue`
//   - set `num` equal to `num` + `digitValue` * modifier
//   - set modifier equal to modifier * 10
// return `num`

// code
function stringToInteger(numStr) {
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

  numStr
    .split("")
    .reverse()
    .forEach((digit) => {
      let digitValue = DIGITS[digit];
      num += digitValue * modifier;
      modifier *= 10;
    });

  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
