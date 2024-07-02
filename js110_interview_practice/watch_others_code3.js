// Given a non-empty string check if it can be constructed by taking a substring of it and
// appending multiple copies of the substring together. You may assume the given string
// consists of lowercase English letters only.

/*[8:51, 9:07]
input: string
output: boolean, true if you can construct the string completely with multiple copies of a substring

rules:
- all lowercase english letters

algorithm:
- declare lastEndingIndex to be length / 2 rounded up.
- iterate from endIndex 1 to lastEndingIndex:
  - if the length of the slice does not go evenly into the length of the string, continue to next iteration
  - declare currSlice to be slice(0, endIndex)
  - check if string can be formed by repeating this pattern by:
    - pad '' with currSlice to the length of the string
    - if it's equal to the string, return true
- return false
*/

function repeatedSubstringPattern(string) {
  let lastEndingIndex = Math.ceil(string.length / 2);

  for (let endIndex = 1; endIndex <= lastEndingIndex; endIndex += 1) {
    if (string.length % endIndex !== 0) continue;

    let currSlice = string.slice(0, endIndex);

    if ("".padStart(string.length, currSlice) === string) return true;
  }

  return false;
}

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abaababaab") === true);
console.log(repeatedSubstringPattern("abcabcabcabc") === true);
