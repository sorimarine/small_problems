/*
input: number
output: boolean, true if prime, false otherwise

rules:
- divisible only by 1 and itself
- 1 is not prime

algorithm:
- if 1, return false
- iterate from num 3 to input number - 1, incrememting by 2 (not interested in even numbers):
  - if input modulo num === 0, return false
- return true
*/

function is_prime(number) {
  if (number === 2) return true;

  if (number === 1 || number % 2 === 0) return false;

  for (let currNum = 3; currNum < number; currNum += 2) {
    if (number % currNum === 0) return false;
  }

  return true;
}

console.log(is_prime(1) === false); // true
console.log(is_prime(2) === true); // true
console.log(is_prime(3) === true); // true
console.log(is_prime(4) === false); // true
console.log(is_prime(5) === true); // true
console.log(is_prime(6) === false); // true
console.log(is_prime(7) === true); // true
console.log(is_prime(8) === false); // true
console.log(is_prime(9) === false); // true
console.log(is_prime(10) === false); // true
console.log(is_prime(23) === true); // true
console.log(is_prime(24) === false); // true
console.log(is_prime(997) === true); // true
console.log(is_prime(998) === false); // true
console.log(is_prime(3_297_061) === true); // true
console.log(is_prime(23_297_061) === false); // true
