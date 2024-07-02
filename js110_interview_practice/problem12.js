/*
input: string
output: boolean, true if pangran

rules:
- pangram uses each alphabet at least once
- case is irrelevant

algorithm:
- declare an object to keep track of letters occurance, call it letters
- break string into an array of characters
- filter the array to only characters that are alphabets
- for each character in the filtered array:
  - set letters[lowercased character] = true
- return whether the number of keys in letters is 26
*/

function isPangram(string) {
  let letters = {};
  string
    .split("")
    .map((char) => char.toLowerCase())
    .filter((char) => isAlphabet(char))
    .forEach((char) => {
      letters[char] = true;
    });

  // console.log(letters)
  return Object.keys(letters).length === 26;
}

function isAlphabet(char) {
  return char >= "a" && char <= "z";
}

const p = console.log;
p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
p(isPangram(myStr) === true);
