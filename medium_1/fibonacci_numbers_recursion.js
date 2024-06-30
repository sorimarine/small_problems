/*
input: number, call it n
output: number, the nth fibonacci 

rules:
- f(1) = 1
- f(2) = 1
- f(n) = f(n - 1) + f(n - 2) where n > 2

algorithm:
- if n less than 3, return 1
- return fibonacci(n - 1) + fibonacci(n - 2)
*/

function fibonacci(n) {
  if (n < 3) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
