/*
input: number
output: number

rules:
- shift each number left to perform 1 rotation
- keep first number in place and shift the rest
- keep doing that til only 2 digits and do one last rotation

algorithm:
- for index 0 through index length - 2:
  - set number = rotateRightmostDigits(length - index)
- return number

*/

function rotateRightmostDigits(number, count) {
  let arr = String(number).split("");
  return Number(
    [
      ...arr.slice(0, arr.length - count),
      ...arr.slice(arr.length - count + 1),
      arr[arr.length - count],
    ].join("")
  );
}

function maxRotation(number) {
  let length = String(number).length;
  for (let i = 0; i < length - 1; i += 1) {
    number = rotateRightmostDigits(number, length - i);
  }
  return number;
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
