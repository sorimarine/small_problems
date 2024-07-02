/*
input: string
output: string, the character that appears the most frequently

rules:
- consider uppercase and lowercase to be the same
- return character in lower case

algorithm:
- keep an object to store the amount of times we ran into it, call it charsCount:
  {
    'a': { count: number, first: number }
  }
- iterate from index 0 to length - 1 of the string:
  - lowercase the current char
  - if char is in charsCount, increment the count by 1
  - else set charsCount[current char] = 1
- set result = ''
- set most = 0
- for each char in the array:
  - if charsCount[char] > most:
    - set result = char;
    - update most
- return result
*/

function mostCommonChar(string) {
  let charCount = {};

  string.split("").forEach((char) => {
    let lowercase = char.toLowerCase();
    if (charCount[lowercase]) {
      charCount[lowercase] += 1;
    } else {
      charCount[lowercase] = 1;
    }
  });

  let mostChar = "";
  let mostCount = 0;

  string.split("").forEach((char) => {
    let lowercase = char.toLowerCase();
    if (charCount[lowercase] > mostCount) {
      mostCount = charCount[lowercase];
      mostChar = lowercase;
    }
  });

  return mostChar;
}

const p = console.log;
p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

let myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr) === "p");

myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
p(mostCommonChar(myStr) === "e");
