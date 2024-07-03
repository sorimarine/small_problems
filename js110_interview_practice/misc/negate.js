// Write a function, negate, that converts all “yes” words to "no" and "no" words to "yes" in a sentence. The comparison for "yes" and "no" should be case insensitive."yes" and "no" should be negated even if ending with ., ?, ,, or !. -- Hamin

/*[11:14, 11:30]
input: string
output: string, but with all occurences of "yes" "no" negated

rules:
- convert all "yes" words to "no" and "no" words to "yes"
- the comparison for "yes" and "no" should be case insensitive
- they should be negated even if ending with a punctuation
- keep the case it was before the negation. "Yes" => "No", not "no"

algorithm:
- splits the sentence into an array `words`, using " " as the separator
- transform each word in words:
  - declare wordToReturn to be lowercase of word
  - declare filteredWord to the word with only alphabets
  - if filteredWord is 'yes':
    - replace 'yes' with 'no' in wordToReturn
  - else if filteredWord is 'no':
    - replace 'no' with 'yes' in wordToReturn
  - if first character of word is uppercase, set the first character of wordToReturn to uppercase
  - return wordToReturn
- join the transformed array into a string, using space as the delimiter
- return that string
*/

function negate(sentence) {
  let words = sentence.split(" ");
  return words
    .map((word) => {
      let wordToReturn = word.toLowerCase();
      let filteredWord = wordToReturn
        .split("")
        .filter((char) => char >= "a" && char <= "z")
        .join("");
      if (filteredWord === "yes") {
        wordToReturn = wordToReturn.replace("yes", "no");
      } else if (filteredWord === "no") {
        wordToReturn = wordToReturn.replace("no", "yes");
      }

      if (word[0] === word[0].toUpperCase()) {
        wordToReturn = wordToReturn[0].toUpperCase() + wordToReturn.slice(1);
      }

      return wordToReturn;
    })
    .join(" ");
}

// Test cases
console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!
