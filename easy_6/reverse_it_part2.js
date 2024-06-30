/*
input: string
output: string

rules:
- input string consists of only words and spaces
- one or more word
- words are separated by a single space
- words with 5 or more letters have their letters in reversed order

algorithm:
- split the string into words
- transform each word:
  - if word is longer than 4 letters, reverse the letters in the word
  - otherwise, the word stays the same
- return the array of transformed words

to reverse the letters of a word:
- break each word into an array of letters
- reverse the array of letters
- join the letters back into a word
- return the word
*/
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.length > 4 ? reverseLetters(word) : word;
    })
    .join(" ");
}

function reverseLetters(str) {
  return str.split("").reverse().join("");
}

console.log(reverseWords("Professional"));
console.log(reverseWords("Walk around the block"));
console.log(reverseWords("Launch School"));
