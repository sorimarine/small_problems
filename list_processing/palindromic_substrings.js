/*
input: string
output: array of palindromic substrings

rules:
- palindromic substrings consist of a sequence of characters that reads the same forward and backward
- substrings should be sorted by their order of appearance in the input string
- duplicate substrings should be included multiple times
- use the previous functions
- consider all characters
- case sensitive
- palindromes have at least 2 characters

algorithm:
- get list of all substrings using the previous exercise's solution
- filter the substrings array for only substring that is a palindrome

checking if a string is palindrome:
- check if the string is equal to the string, reversed
*/

// previously, we had these functions to help
function leadingSubstrings(string) {
  let substrings = [];
  string.split("").reduce((substring, currChar) => {
    substring += currChar;
    substrings.push(substring);
    return substring;
  }, "");

  return substrings;
}

function substrings(string) {
  let results = [];
  for (let i = 0; i < string.length; i += 1) {
    let currString = string.slice(i);
    results.push(...leadingSubstrings(currString));
  }
  return results;
}

// now for this problem
function isPalindrome(string) {
  if (string.length < 2) return false;
  return string === string.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter((substring) => isPalindrome(substring));
}

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
