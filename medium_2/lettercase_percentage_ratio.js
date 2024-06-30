/*
input: string
output: object
  {
  "lowercase": (string decimal, 2 decimal places),
  "uppercase": (...),
  "neither": (...)
  }
rules:
- string will contain at least 1 character
- the values represent percentages of the charactera in the string
- values are strings
  - 2 decimal places
  - no % sign
algorithm
- declare an object to be returned, call it result
- break the string down into an array of characters
- get only the characters that are upper case by filtering
  for only characters that are strictly equal to their uppercased
- set objects uppercase to the length of that array / length of array of all characters
- get only characters that are only lowercase, like with uppercase
- set objects lowercase value to ...
- set value of neither to total length - the other two arrays length
*/

function isAlphabet(char) {
  let lowercase = char.toLowerCase();
  return lowercase >= "a" && lowercase <= "z";
}

function letterPercentages(string) {
  let allChars = string.split("");
  let upperCount = allChars.filter(
    (char) => isAlphabet(char) && char.toUpperCase() === char
  ).length;
  let lowerCount = allChars.filter(
    (char) => isAlphabet(char) && char.toLowerCase() === char
  ).length;
  let neitherCount = allChars.length - upperCount - lowerCount;

  return {
    lowercase: `${((lowerCount / allChars.length) * 100).toFixed(2)}`,
    uppercase: `${((upperCount / allChars.length) * 100).toFixed(2)}`,
    neither: `${((neitherCount / allChars.length) * 100).toFixed(2)}`,
  };
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
