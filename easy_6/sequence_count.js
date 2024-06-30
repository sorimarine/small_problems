/*
input: (number, number) call them (`count`, startNum)
output: array

rules:
- output array contains `count` number of elements
- first element is `startNum`
- second element is `startNum`× 2
- third element js `startNum` * 3
- if `count` is 0, return []

algorithm:
- declare an empty array to store the elements to be returned, `result`
- start a loop that goes from `modifier` 1 to `modifier` `count`:
  - push onto `result`, `modifier` * startNum
- return `result`
*/

function sequence(count, startNum) {
  let result = [];
  for (let modifier = 1; modifier <= count; modifier += 1) {
    result.push(modifier * startNum);
  }
  return result;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 100000));
