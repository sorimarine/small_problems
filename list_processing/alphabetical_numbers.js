/*
input: array of integers between 0 and 19
output: array of integers, sorted based on the English word for each number

rules: all in input/output
- will assume that we do not mutate the array

algorithm:
- declare an array to map index (representing integer value) to dictionary word
- make a shallow copy of the array
- sort the shallow copy like this:
  - put a before b if the dictionary word representation of a comes before that of b
- return the sorted shallow copy
*/

const ENGLISH_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "evelen",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function alphabeticNumberSort(numbers) {
  return numbers.slice().sort((a, b) => {
    if (ENGLISH_WORDS[a] < ENGLISH_WORDS[b]) return -1;

    if (ENGLISH_WORDS[a] > ENGLISH_WORDS[b]) return 1;

    return 0;
  });
}

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
