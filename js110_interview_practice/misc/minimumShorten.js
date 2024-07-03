// Implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit.  -- Pablo

/*[11:32, 11:52]
input: string, number
output: string, (shorten the input string to the length given by input number)

rules:
- shorten by removing vowels in the sequence of a, e, i , o, and u.
- start removing from the end of the sentence
- if it cannot be shorten to fit within the character limit, return an empty string
- spaces don't count towards the character limit

algorithm:
- determine the character count of the sentence:
  - declare charCount equal to sentence.length - (sentence.split(" ").length - 1)
- if charCount <= charLimit:
  - return the sentence
- declare VOWELS = ['a', 'e', 'i', 'o', 'u']
- start a loop from index 0 to index VOWELS.length - 1, inclusive:
  - declare currVowel = VOWELS[index]
  - while true:
    - declare lastIndex = findLastIndex of currVowel in the setence
    - if lastIndex is -1:
      - break out of the while loop
    - sentence = slice(0, lastIndex) + slice(lastIndex + 1)
    - charCount--
    - if charCount <= charLimit: return sentence
- return ""
*/

function minimumShorten(sentence, charLimit) {
  let charCount = sentence.length - (sentence.split(" ").length - 1);
  if (charCount <= charLimit) return sentence;

  let VOWELS = ["a", "e", "i", "o", "u"];
  for (let index = 0; index < VOWELS.length; index += 1) {
    let currVowel = VOWELS[index];

    while (true) {
      let lastIndex = sentence.lastIndexOf(currVowel);
      if (lastIndex === -1) break;

      sentence = sentence.slice(0, lastIndex) + sentence.slice(lastIndex + 1);
      charCount -= 1;
      if (charCount <= charLimit) return sentence;
    }
  }

  return "";
}

// Test cases
console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); // "
