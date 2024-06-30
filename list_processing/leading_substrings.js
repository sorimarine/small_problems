/*
input: string
output: an array of strings

rules:
- each substring must begin with the first letter of the string
- The length of the array is effectively the length of the input string
- the array should be ordered from shortest substring to longest

algorithm:
- start with an empty array, substrings
- split the string into an array of characters
- start with an empty substring
- for each character:
  - concat the character to the substring
  - push the substring to the `substrings` array
return the `substrings` array
*/

function leadingSubstrings(string) {
  let substrings = [];
  string.split("").reduce((substring, currChar) => {
    substring += currChar;
    substrings.push(substring);
    return substring;
  }, "");

  return substrings;
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
