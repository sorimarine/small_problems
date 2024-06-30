/*
input: number
output: number, next featured number greater than the given number

rules:
- featured numbers must be:
  - odd
  - multiple of 7
  - each digit appears only once
  - less than or equal to 9876543201

algorithm:
- get the next multiple of 7 after that number:
  - divide that number by 7, round it up, and multiply by 7 set it to multipleOf7
- while the multipleOf7 is less than or equal to 9876543201:
  - if it's odd, and no digit appears twice, return the number
  - increment the number by 7
- return "There is no possible number that fulfills those requirements."

checking for noDigitsRepeat:
- make an empty object digits
- convert the number into a string and iterate through every digit:
  - if the current digit is a key in object, return false
  - add object[digit] = true
- return true

*/

const LARGEST_FEATURED = 9876543201;

function noDigitsRepeat(number) {
  let digits = {};
  let numStr = String(number);
  for (let i = 0; i <= numStr.length; i += 1) {
    let currDigit = numStr[i];
    if (digits[currDigit]) return false;

    digits[currDigit] = true;
  }

  return true;
}

function featured(number) {
  const ERROR_MESSAGE =
    "There is no possible number that fulfills those requirements.";

  if (number === LARGEST_FEATURED) return ERROR_MESSAGE;

  let multipleOf7 = Math.ceil(number / 7) * 7;

  while (multipleOf7 <= LARGEST_FEATURED) {
    if (multipleOf7 % 2 !== 0 && noDigitsRepeat(multipleOf7))
      return multipleOf7;

    multipleOf7 += 7;
  }

  return ERROR_MESSAGE;
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
