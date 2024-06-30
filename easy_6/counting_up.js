// input: number, call it `num`
// output: array

// rules:
// - input is integer
// - 1 is always part of the array
// - the input is in the array
// - ascending order (from smallest number to largest number), means 1 is the first, input is the last

// algorithm:
// - declare an empty array, call it nums
// - iterate from `currNum` 1 to `currNum` `num`:
//   - push `currNum` into `nums`
// - return `nums`

// code:
function sequence(num) {
  let nums = [];
  for (let currNum = 1; currNum <= num; currNum += 1) {
    nums.push(currNum);
  }
  return nums;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
