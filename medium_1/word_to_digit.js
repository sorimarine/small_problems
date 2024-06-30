/*
input: string
output: string

rules:
- return string has every occurence of a "number word" converted to its number representation
- words are separated by a single space

data structures:
- can probably be done with an object to map each word as key and number as value

algorithm:
- declare a WORDS_TO_NUMS object that maps a number word to its number representation
- declare a new string variable = string given, let's call it changedSentence;
- for each key in WORDS_TO_NUMS:
  - replace all occurences of that key in the string with the value associated, and assign it to changedSentence
*/

function getOnlyAlphabets(string) {
  return string.split("").filter((char) => char >= "a" && char <= "z");
}

function wordToDigit(sentence) {
  let WORDS_TO_NUMS = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let changedSentence = sentence;

  for (let numWord in WORDS_TO_NUMS) {
    changedSentence = changedSentence.replaceAll(
      numWord,
      WORDS_TO_NUMS[numWord]
    );
  }

  return changedSentence;
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
