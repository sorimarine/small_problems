/* 5:26, 5:37
input: string
output: number (of alphabetic characters or digits that occur more than once)

rules:
- input contains only alphanumeric characters
- returns 0 if no character occur more than once

algorithm:
- declare an empty object, charCount, to store the number ofoccurences of each character
- start a loop from index 0 to index length - 1 inclusive:
  - if the character at that index is in charCount, incrememt it by 1
  - otherwise, set it to 1
- get the the array of values of charCount, filtered to only value > 1
- return the length of the filtered array
*/

function distinctMultiples(string) {
  let charCount = {};
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index].toLowerCase();
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  return Object.values(charCount).filter((value) => value > 1).length;
}

const p = console.log;
p(distinctMultiples("xyz") === 0); // (none)
p(distinctMultiples("xxyypzzr") === 3); // x, y, z
p(distinctMultiples("xXyYpzZr") === 3); // x, y, z
p(distinctMultiples("unununium") === 2); // u, n
p(distinctMultiples("multiplicity") === 3); // l, t, i
p(distinctMultiples("7657") === 1); // 7
p(distinctMultiples("3141592653589793") === 4); // 3, 1, 5, 9
p(distinctMultiples("2718281828459045") === 5); // 2, 1, 8, 4, 5
