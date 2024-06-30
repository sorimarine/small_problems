/*
input: string
output:
  - longest sentence (sentence with the most words)
  - "The longest sentence has `numWords` words."

rules: 
- [., !, ?] count as sentence-ending
- any other punctuation should count as part of the word. -- is also a word
- a single space separates the words

algorithm:
- build an array of indices of all sentence ending characters:
  - declare an empty array called endingIndices
  - iterate from index 0 to length - 1:
    - if char at index is one of the three enders, add it to endingIndices
- declare startIndex = 0
- declare an empty array to hold sentences
- for each value in endingIndices:
  - push slice (startIndex, the current value + 1) into the sentences array
  - set startIndex = value + 1
- sort the sentences array by the length of the sentence in descending order
- return sentences[0]
*/

const ENDING_CHARS = [".", "!", "?"];

function longestSentence(text) {
  let endingIndices = [];
  for (let i = 0; i < text.length; i += 1) {
    if (ENDING_CHARS.includes(text[i])) {
      endingIndices.push(i);
    }
  }

  let startIndex = 0;
  let sentences = [];
  endingIndices.forEach((endingIndex) => {
    sentences.push(text.slice(startIndex, endingIndex + 1).trim());
    startIndex = endingIndex + 1;
  });

  sentences.sort((a, b) => b.split(" ").length - a.split(" ").length);

  console.log(`${sentences[0]}\n`);
  console.log(
    `The longest sentence has ${sentences[0].split(" ").length} words.`
  );
}

let longText =
  "Four score and seven years ago our fathers brought forth on this " +
  "continent a new nation, conceived in liberty, and dedicated to the " +
  "proposition that all men are created equal. Now we are engaged in a " +
  "great civil war, testing whether that nation, or any nation so " +
  "conceived and so dedicated, can long endure. We are met on a great " +
  "battlefield of that war. We have come to dedicate a portion of that " +
  "field, as a final resting place for those who here gave their lives " +
  "that that nation might live. It is altogether fitting and proper that " +
  "we should do this.";

let longerText =
  longText +
  "But, in a larger sense, we can not dedicate, we can not consecrate, " +
  "we can not hallow this ground. The brave men, living and dead, who " +
  "struggled here, have consecrated it, far above our poor power to add " +
  "or detract. The world will little note, nor long remember what we say " +
  "here but it can never forget what they did here. It is for us the " +
  "living, rather, to be dedicated here to the unfinished work which " +
  "they who fought here have thus far so nobly advanced. It is rather " +
  "for us to be here dedicated to the great task remaining before us -- " +
  "that from these honored dead we take increased devotion to that " +
  "cause for which they gave the last full measure of devotion -- that " +
  "we here highly resolve that these dead shall not have died in vain " +
  "-- that this nation, under God, shall have a new birth of freedom -- " +
  "and that government of the people, by the people, for the people, " +
  "shall not perish from the earth.";

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
