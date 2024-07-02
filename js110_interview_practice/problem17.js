/*[5:42, 6:03]
input: array (of integers)
output: integer, smallest integer that can be added to the array to get the first prime number bigger than the sum of the array

rules:
- array contains at least 2 integers
- all integers are greater thhan 0
- multiple occurances of the same number possible, treat them individually
- prime numbers are only divisible by 1 and itself


algorithm:
- get the sum of the array of integers, call it `sum`:
  - declare sum = 0
  - for each integer in array:
    - add it to sum
- calculate the first prime number bigger than sum, call it nextPrime
- return nextPrime - sum

to calculate nextPrime (limit):
- declare an array to keep all `primes`, set it to [2]
- declare currNum to be 3
- start a generic while loop:
  - if currNum is not divisible by every prime in primes:
    - if currNum > limit, return currNum
    - add currNum to `primes`
  - increment currNum by 2
*/

function nextPrime(limit) {
  let primes = [2];
  let currNum = 3;
  while (true) {
    if (!primes.some((prime) => currNum % prime === 0)) {
      if (currNum > limit) return currNum;

      primes.push(currNum);
    }
    currNum += 2;
  }
}

function nearestPrimeSum(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });

  let prime = nextPrime(sum);

  return prime - sum;
}

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
