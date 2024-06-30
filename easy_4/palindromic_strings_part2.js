// input: a string
// output: a boolean, `true` if string is palindrome, `false` otherwise

// Explicit:
// - case-insensitive
//   - "Madam" => true
// - ignore all non-alphanumeric characters
//   - "Madam, I'm Adam" => true

// Data Structures
// String and Arrays will have useful built in methods

// Algorithm:
// - remove the non-alphanumeric characters from the string, as such:
//   - lowercase the string, since we don't care about case
//   - convert the string to an array of characters
//   - filter the array to only characters a-z and 0-9, using these conditions:
//     - any character with char code between char code of 'a' and char code of 'z'
//     - any character with char code between char code of '0' and char code of '9'
//   - join the array of characters back into a string
// - call the palindrome function from part 1, using the new string as input

// part 1 code
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}

function removeNonAlphaNumeric(str) {
  return str
    .split("")
    .filter((char) => {
      return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
    })
    .join("");
}

function isRealPalindrome(str) {
  let cleanedStr = removeNonAlphaNumeric(str.toLowerCase());
  return isPalindrome(cleanedStr);
}
