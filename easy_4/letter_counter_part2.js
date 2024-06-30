// input: string, call it str
// output: object, shows number of words of different sizes

// explicit:
// - string consists of zero or more words
// - words are separated by space
// - return object shows the number of words of different sizes as such:
//   - "Four score and seven." => {"3": 1, "4": 1, "5": 1, "6": 1}
// - punctuation does NOT count towards word size
//
// implicit:
// - empty string returns empty object

// data structures
// string as input, object as output. arrays have good built-in methods
//
// algorithm:
// - declare an empty object, `sizes`
// - split `str` into array of words and for each `word`:
//   - strip the word of non-letters by:
//     - lowercase the word
//     - split word into array of characters, `chars`
//     - filter `chars` to only character >= 'a' and <= 'z'
//   - set `wordLength` = the length of the word
//   - if the `wordLength` property of `sizes` does not exist, set it to 0
//   - increment the value of the `wordLength` property of `sizes` by 1
// - return sizes

// code
function wordSizes(str) {
  if (str.length === 0) return {};

  let sizes = {};
  str.split(" ").forEach((word) => {
    let chars = word.toLowerCase().split("");
    word = chars.filter((char) => char >= "a" && char <= "z");
    let wordLength = word.length;
    if (!sizes.hasOwnProperty(wordLength)) {
      sizes[wordLength] = 0;
    }

    sizes[wordLength] += 1;
  });

  return sizes;
}

console.log(wordSizes("Four score and seven."));
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!"));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(""));
