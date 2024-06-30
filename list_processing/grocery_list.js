/*
input: array of arrays, 2-d array [[fruitname(string), quantity(number)]]
output: array, array of strings

rules: 
- each element of the input is an array containing fruit name (string) and quantity desired (number)
- output array shows the fruit name quantity amount of times

algorithm (call input `arr`):
- declare an empty array, call it `result`
- for each `subArr` in `arr`:
  - push `subArr[0]` into `result` `subArr[1]` times
- return result
*/

function buyFruit(arr) {
  let result = [];
  arr.forEach(([fruitName, quantity]) => {
    for (let count = 0; count < quantity; count += 1) {
      result.push(fruitName);
    }
  });
  return result;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
