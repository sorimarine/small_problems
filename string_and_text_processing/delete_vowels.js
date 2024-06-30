/*
input: array of strings
output: an array of the same string values, with all the vowels removed

rules:
- if it's all vowels, an empty string should be in that array slot

algorithm:
- for each string in the array:
  - transform it such that all vowels are removed by:
    - split the string into an array of characters
    - filter the array for characters that are not a,e,i,o,u
      - lowercase the characters here for comparison
    - join the filtered characters back and return the string
- return the transformed array of strings
*/

function removeVowels(strings) {
  return strings.map((string) => {
    return string
      .split("")
      .filter((char) => !["a", "e", "i", "o", "u"].includes(char.toLowerCase()))
      .join("");
  });
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
