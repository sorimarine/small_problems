/*
input: string
output: boolean 

rules:
- returns true if all alphabetic characters inside the string are uppercase
- false otherwise
- ignore characters that are not alphabetic
- return true for an empty string

algorithm:
- break the string into an array of characters
- iterate through the characters in the array:
  - compare it to the uppercase of itself
  - return false if it's not equal
- return true
*/

function isUppercase(string) {
  let chars = string.split("");
  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] !== chars[i].toUpperCase()) return false;
  }
  return true;
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true

/*
uh...
just check if the string is equal to itself uppercased next time sigh
duh!
*/
