/*
input: array of numbers
output: number, sum of the sums of each leading sequence in that array

rules:
[
first index,
first index + second index,
first index + second index + third index,
first + second + third + fourth,
...]
- add those up and return that value
- non empty array
- single item array returns the single item

algorithm:
- declare sum 0
- declare subtotal 0
- for each num in the array:
  - set subtotal = subtotal + num
  - set sum = sum + subtotal
- return sum
*/

function sumOfSums(numbers) {
  let sum = 0;
  let subtotal = 0;
  numbers.forEach((num) => {
    subtotal += num;
    sum += subtotal;
  });
  return sum;
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
