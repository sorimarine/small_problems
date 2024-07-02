/*[6:47, 6:56]
input: array (of numbers)
output: number ( the unique number in the array)

rules:
- all but one numbers are the same
- array will contain at least 3 numbers
- exactly one number that is different

algorithm:
- declare a occurance object as empty
- for each number in the array:
  - if occurance[number] exists, increment it by 1
  - otherwise set the occurance[number] to 1
- for each number in occurance:
  - if occurance[number] === 1, return Number(number)
*/

function whatIsDifferent(numbers) {
  let occurance = {};
  numbers.forEach((number) => {
    if (occurance[number]) {
      occurance[number] += 1;
    } else {
      occurance[number] = 1;
    }
  });

  for (let number in occurance) {
    if (occurance[number] === 1) return Number(number);
  }
}

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
