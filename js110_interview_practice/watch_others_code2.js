// Write function scramble(str1, str2) that returns true if a portion of str1 characters can
// be rearranged to match str2, otherwise returns false

/*[8:36, 8:44]
input: string, string
output: boolean, true if potion of str1 characters can be used to form str2

rules:
- only lower case letters will be used. no punctuation or digits will be included

algorithm:
- declare an object to keep count of all characters in the first string, call it charCounts
- for each character in the first string:
  - if charCounts[character] exists, increment it by 1
  - else set it to 1
- for each character in the second string:
  - if there's no entry for the character or if the character count is 0, return false
  - else decrement the count by 1
- return true
*/

function scramble(str1, str2) {
  let charCounts = {};
  str1.split("").forEach((character) => {
    if (charCounts[character]) {
      charCounts[character] += 1;
    } else {
      charCounts[character] = 1;
    }
  });

  for (let i = 0; i < str2.length; i += 1) {
    let char = str2[i];
    if (!charCounts[char]) return false;

    charCounts[char] -= 1;
  }

  return true;
}

console.log(scramble("javaass", "jjss") === false);
console.log(scramble("rkqodlw", "world") === true);
console.log(scramble("cedewaraaossoqqyt", "codewars") === true);
console.log(scramble("katas", "steak") === false);
console.log(scramble("scriptjava", "javascript") === true);
console.log(scramble("scriptingjava", "javascript") === true);
