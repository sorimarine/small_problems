/*[7:52, 8:02]
input: a number
output: a number (sum of all multiples of 7 or 11 that are less than the argument)

rules:
- if input is negative or 0, return 0
- if a number is a multiple of 7 and 11, count it just once (only unique numbers)

algorithm:
- declare an object to keep multiples. it's empty initially
- start a loop from multipleOf7 7 to less than limit:
  - set multiples[multipleOf7] to true
  - increment multipleOf7 by 7
- start a loop from multipleOf11 11 to less than limit:
  - set multiples[multipleOf11] to true
  - increment multipleOf11 by 11
- declare sum = 0
- for each `numStr` in multiples:
  - convert num to number and add it to sum
- return sum 

*/

function sevenEleven(limit) {
  let multiples = {};
  for (let multipleOf7 = 7; multipleOf7 < limit; multipleOf7 += 7) {
    multiples[multipleOf7] = true;
  }

  for (let multipleOf11 = 11; multipleOf11 < limit; multipleOf11 += 11) {
    multiples[multipleOf11] = true;
  }

  let sum = 0;
  for (let numStr in multiples) {
    sum += Number(numStr);
  }

  return sum;
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
