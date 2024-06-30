/*
input: number, call it n
output: number, the nth fibonacci 

rules:
- f(1) = 1
- f(2) = 1
- f(n) = f(n - 1) + f(n - 2) where n > 2

algorithm:
- declare a global object to keep n's that have already been calculated
  call it calculated
- if n less than 3, return 1
- if n in calculated, return its value
- set calculated[n] = fibonacci(n - 1) + fibonacci(n - 2)
- return calculated[n]
*/

let calculated = {};

function fibonacci(n) {
  if (n < 3) return 1;

  if (calculated[n]) return calculated[n];

  calculated[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return calculated[n];
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
