/*
input: string
output: string

rules:
- input string can be empty
- output string has words in the input array in reversed order
- words are separated by a single space

algorithm: (str)
- break `str` into an array of words
- reverse the array of words
- convert the reversed array to string using space as the delimiter
- return the resulting string
*/

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseSentence(""));
console.log(reverseSentence("Hello World"));
console.log(reverseSentence("Reverse these words"));
