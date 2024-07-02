/*
input: string (of digits) 
output: number (of even-numbered substrings that can be formed)

rules:
- count each occurrance of the same substring as separate strings

algorithm:
- declare an array to hold substrings, call it substrings
- start a loop, i as index, from 0 to length - 1:
  - push the digits[i] onto substrings
  - start another loop, j as index, from i + 1 to length - 1;
    - push the digits.slice(i, j + 1) onto substrings
- filter the substrings array for only even numbers
- return the length of the filtered array
*/

function getAllSubstrings(digits) {
  let substrings = [];
  for (let i = 0; i < digits.length; i += 1) {
    substrings.push(digits[i]);
    for (let j = i + 1; j < digits.length; j += 1) {
      substrings.push(digits.slice(i, j + 1));
    }
  }
  return substrings;
}

function evenSubstrings(digits) {
  return getAllSubstrings(digits).filter((numStr) => Number(numStr) % 2 === 0)
    .length;
}

// console.log(getAllSubstrings('1432'));

const p = console.log;
p(evenSubstrings("1432") === 6);
p(evenSubstrings("3145926") === 16);
p(evenSubstrings("2718281") === 16);
p(evenSubstrings("13579") === 0);
p(evenSubstrings("143232") === 12);
