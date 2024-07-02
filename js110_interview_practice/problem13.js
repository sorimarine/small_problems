/*
input: string, string
output: boolean, if the characters in the first string can be rearranged to match the second string

rules:
- neither input is an empty string
- strings are both all lowercase alphabetic characters

algorithm:
- declare an empty object to keep track of the count of each letter in the second string. We'll call it letterCount
- split the second string into an array of characters
- for each character in that array:
  - if letterCount[character] exists, increment it by 1
  - else set it to 1
- split the first string into an array of characters
- for each character in that array:
  - if letterCount[character] exists, decrement it by 1
- get a list of all values of letterCount
- filter that list to values that are greater than 0
- if the length of that list is greater than 0, return false
- otherwise return true
*/

function unscramble(str1, str2) {
  let letterCount = {};
  str2.split("").forEach((char) => {
    if (letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  });

  str1.split("").forEach((char) => {
    if (letterCount[char]) {
      letterCount[char] -= 1;
    }
  });

  return !Object.values(letterCount).some((count) => count > 0);
}

const p = console.log;
p(unscramble("ansucchlohlo", "launchschool") === true);
p(unscramble("phyarunstole", "pythonrules") === true);
p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coal") === true);
