// Palindromic Strings (Part 1)
//
// input: a string
// output: boolean. `true` if the string is a palindrome. `false` otherwise
//
// Explicit:
//   - A palindrome reads the same forwards and backwards
//   - the case matters
//   - all characters matter
// Implicit:
//   - not just alphabets, all characters are included
//
// Data Structures:
//   - Array has a very convenient built-in method, `reverse`
// 
// Algorithm (let's call the parameter variable `str`):
// - get the reversed string of `str` and set it to `reversedStr`
// - return the result of the strict comparison of `str` and `reversedStr`

// Code
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));