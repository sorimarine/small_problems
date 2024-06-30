// input: string of words separated by spaces, call it `str`
// output: string, each word's first and last letters swapped

// explicit:
// - string contains at least one word
// - every word contains one or more letter
// - string contains nothing but words and spaces
//   - no leading, trailing, or repeated spaces
//
// implicit:
// - single letter words remain the same

// data structures:
// - String and Array have useful built-in methods

// algorithm:
// - split `str` into array of words, `words`
// - perform transformation for each `word` in the `words` array like this:
//   - if word length is 1, return word
//   - split the word into array of characters, `chars`
//   - set the first index of `chars` to the last character of `word`
//   - set the last index of `chars` to the first character of `word`
//   - join the `chars` array back into a word and return the result
// - join the above transformation back into a string and return it

function swap(str) {
  let words = str.split(" ");
  return words
    .map((word) => {
      if (word.length === 1) return word;

      let chars = word.split("");
      chars[0] = word[word.length - 1];
      chars[chars.length - 1] = word[0];
      return chars.join("");
    })
    .join(" ");
}

console.log(swap("Oh what a wonderful day it is"));
console.log(swap("Abcde"));
console.log(swap("a"));
