// input: integer
// output: boolean, `true` if numbers are palindrome, `false` otherwise
//
// explicit:
// - palindromic number reads the same forwards and backwards
//
// data structure
// - Will likely want to convert this into string and use the previously made function
//
// algorithm:
// - convert number into string
// - call the previously made palindrome function on the string and return the result
//

// part 1 code
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
