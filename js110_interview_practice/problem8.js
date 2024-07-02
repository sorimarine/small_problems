/*
input: string
output: number, length of the longest vowel substring

rules:
- input is entirely lowercase alphabetic characters
- output is the length of the longest vowel substring, (contiguous)
  - this means a substring that has only vowels
- string is non-empty
- no vowel returns 0

algorithm:
- set a highest to 0
- set currCount 0
- iterate through each character in the string:
  - if the character is a vowel, we increment count
  - otherwise:
    - if it's higher than highest, we set highest to currCount
    - reset currCount = 0
- if currCount is higher than highest, return currCount
- otherwise return highest
*/

function longestVowelSubstring(string) {
  let highest = 0;
  let currCount = 0;
  string.split("").forEach((character) => {
    if (["a", "e", "i", "o", "u"].includes(character)) {
      currCount += 1;
    } else {
      if (currCount > highest) {
        highest = currCount;
      }
      currCount = 0;
    }
  });

  return currCount > highest ? currCount : highest;
}

const p = console.log;
p(longestVowelSubstring("cwm") === 0);
p(longestVowelSubstring("many") === 1);
p(longestVowelSubstring("launchschoolstudents") === 2);
p(longestVowelSubstring("eau") === 3);
p(longestVowelSubstring("beauteous") === 3);
p(longestVowelSubstring("sequoia") === 4);
p(longestVowelSubstring("miaoued") === 5);
