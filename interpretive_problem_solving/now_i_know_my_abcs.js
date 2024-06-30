/*
input: string, representing a word
output: boolean

given a collection of spelling blocks of 2 letters per block:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

rules:
- each block can only be used once. first block for example, can not use both B and O
- if a word can be spelled with the letters in the collection, while only using each block once, return true
- otherwise false
- case insensitive

data structures:
- array to store the collection given

algorithm:
- declare the initial state of the blocks, representing it as an array of arrays
  [
    ['b', 'o'],
    ['x', 'k'],
    ...
  ]
- iterate through the word from index 0 to index length - 1:
  - find the index of the first block in the collection to that contains this character
  - if that index is -1, return false
  - remove that block from the collection of blocks
- return true
*/
function isBlockWord(word) {
  let blocks = [
    ["B", "O"],
    ["X", "K"],
    ["D", "Q"],
    ["C", "P"],
    ["N", "A"],
    ["G", "T"],
    ["R", "E"],
    ["F", "S"],
    ["J", "W"],
    ["H", "U"],
    ["V", "I"],
    ["L", "Y"],
    ["Z", "M"],
  ];

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i].toUpperCase();
    let blockIndex = blocks.findIndex((block) => block.includes(char));

    if (blockIndex === -1) return false;

    blocks.splice(blockIndex, 1);
  }

  return true;
}

console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
