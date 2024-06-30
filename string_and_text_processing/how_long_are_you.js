/*
input: string
output: array of strings

rules:
- return an empty array of empty string or no argument is given
- words are separated by a single space
- everything other than space counts towards length
- each string in the array should be
  the word followed by a single space followed by the length
  
algorithm:
- return [] array if string is falsy
- break the string into an array of words
- transform each word in the array:
  - word += word.length
- return the transformed array
*/
function wordLengths(string) {
  return !string
    ? []
    : string.split(" ").map((word) => `${word} ${word.length}`);
}

console.log(wordLengths("cow sheep chicken")); // ["cow 3", "sheep 5", "chicken 7"]
console.log(wordLengths("baseball hot dogs and apple pie")); // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
console.log(wordLengths("It ain't easy, is it?")); // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
console.log(wordLengths("Supercalifragilisticexpialidocious")); // ["Supercalifragilisticexpialidocious 34"]
console.log(wordLengths("")); // []
console.log(wordLengths()); // []
