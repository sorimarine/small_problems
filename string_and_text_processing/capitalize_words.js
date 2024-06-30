/*
input: string
output: string

rules:
- output string has the first letter of every word of the input string capitalized
- a word is broken by a single space

algorithm:
- break the string down to an array of words, using " " as the separator
- transform each word in the words array:
  - capitalize the char at index 0 and add it to a slice starting at 1, lowercased
  - return the result of that
- join the transformed array of words back into a string using " " as the delimiter
- return the joined string
*/

function wordCap(string) {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
