/*
input: number, number
output: number

rules:
- shifting 1 returns the same number
- shifting 2 moves the right most digit one digit over
- remove the element we want to rotate and put it at the end

algorithm (number, count):
- convert to string
- convert to array of digits
- we want slice(0,length - count) + slice(length - count + 1) + digits[length - count]
- convert back to number and return it
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

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
