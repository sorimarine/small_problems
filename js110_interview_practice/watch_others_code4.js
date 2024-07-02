// Given an array of strings made only from lowercase letters, return an array of all
// characters that show up in all strings within the given array (including duplicates). for
// example, if a character occurs 3 times in all strings but not 4 times, you need to include
// that character three times in the final answer

/*[9:33, 10:00]
input: an array of strings
output: an array of characters that show up in all strings

rules:
- duplicates count
- empty array if no character

algorithm:
- declare an array of charsCounts object to keep track of each string's character count
- for each string in the array:
  - get the charsCount and push it into the charCounts array
- declre common []
- take the first charsCount, and for each char:
  - filter the charsCounts array to only those that has the key char
  - if the filtered array is of the same length as the charsCounts array:
    - declare min = charsCounts[0][char]
    - for each element in the filtered array:
      - if the element[char] is less than min, assign that to min
    - push char into common min times
- return common

charsCount (string) :
- declare an empty result object
- for each character in the string:
  - if result[character] exists increment it by 1
  - else set it to 1
- return result
*/

function getCharsCount(string) {
  let result = {};
  string.split("").forEach((char) => {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });
  return result;
}

function commonChars(strings) {
  let charsCounts = strings.map((string) => getCharsCount(string));

  let common = [];
  for (let char in charsCounts[0]) {
    let commonCounts = charsCounts.filter((charsCount) =>
      charsCount.hasOwnProperty(char)
    );
    if (commonCounts.length !== charsCounts.length) continue;

    let min = charsCounts[0][char];
    commonCounts.forEach((charCount) => {
      if (charCount[char] < min) {
        min = charCount[char];
      }
    });

    for (let i = 0; i < min; i += 1) {
      common.push(char);
    }
  }

  return common;
}

// commonChars(['a', 'b'])
// commonChars(["hello", "goodbye", "booya", "random"])
// commonChars(["bella", "label", "roller"])
console.log(commonChars(["a", "b"])); // []
console.log(commonChars(["ab", "bc"])); // ["b"]
console.log(commonChars(["bella", "label", "roller"])); // ["e", "l", "l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c", "o"]
console.log(commonChars(["hello", "goodbye", "booya", "random"])); // ["o"]
console.log(
  commonChars(["aabbaaaa", "ccdddddd", "eeffee", "ggrrrrr", "yyyzzz"])
); // []
