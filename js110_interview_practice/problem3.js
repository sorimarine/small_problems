/*
input: string
output: string

rules:
- convert every second character in every third word to uppercase
- words are separated by a single space
- nothing but alphabets and spaces in the test cases

algorithm:
- split the sentence into an array of words
- transform the array of words, like this:
  - if the index of that (word + 1) % 3 is 0, uppercase every second character of the word and return that string
  - return the original word
- join the transformed array and return it

to uppercase every second letter (given `word`):
- break word into characters array
- transform the characters like this:
  - if the index of that character is odd, return the character uppercased
  - return the character as is
- return join the characters back into word and return it
*/

function upperEverySecondChar(word) {
  return word
    .split("")
    .map((char, index) => (index % 2 === 1 ? char.toUpperCase() : char))
    .join("");
}

function toWeirdCase(sentence) {
  return sentence
    .split(" ")
    .map((word, index) =>
      (index + 1) % 3 === 0 ? upperEverySecondChar(word) : word
    )
    .join(" ");
}

let p = console.log;
let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);

original = "It is a long established fact that a reader will be distracted";
expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
p(toWeirdCase(original) === expected);

p(toWeirdCase("aaA bB c") === "aaA bB c");

original =
  "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
expected =
  "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);
