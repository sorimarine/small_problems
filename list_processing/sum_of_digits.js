/*
input: number
output: number

rules:
- input is positive integer
- output is sum of the individual digits of the input

algorithm:
- convert input to string
- split string into an array of individual digits
- keep track of subtotal with a variable, start at 0
- for each digit in the array of digits:
  - convert digit to number
  - add number value of digit to subtotal
- return subtotal
*/

function sum(number) {
  return String(number)
    .split("")
    .reduce((subtotal, currDigit) => subtotal + Number(currDigit), 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
