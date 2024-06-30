/*
input: string
output: array of substrings

rules:
- output array should have all substrings of the input string
- array should be ordered by the where in the list the substring begins
- should use the leadingSubstrings function we worked on from previous problem

algorithm:
- declare an empty array to keep the results
- iterate from index 0 to index length - 1:
  - declare currString = substring from `index` to the end of the string
  - call leadingSubstrings using `currString`
  - concat the returned array to the results array
- return `results`
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

function substrings(string) {
  let results = [];
  for (let i = 0; i < string.length; i += 1) {
    let currString = string.slice(i);
    results.push(...leadingSubstrings(currString));
  }
  return results;
}
console.log(substrings("abcde"));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
