/*
input: number, call n
output: number, the nth fibonacci

rules:
- n = 1, fib = 1
- n = 2, fib = 2
- fib = fib(n - 1) + fib(n - 2), (next fib is prev fib + curr fib)

algorithm:
- if n < 3, return 1
- declare currN = 3 to keep track of what n you're on
- declare prev and curr to be 1, those are our first 2 fibs
- while currN <= n:
  - calculate the next fib which is curr + prev
  - assign curr to prev and assign the new fib to curr
  - increment curr;
return curr 
*/

function fibonacci(n) {
  if (n < 3) return 1;

  let [prev, curr, currN] = [1, 1, 3];
  while (currN <= n) {
    [prev, curr] = [curr, curr + prev];
    currN += 1;
  }

  return curr;
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
