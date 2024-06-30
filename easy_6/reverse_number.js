// input: number call it `num`
// ouput: number, original numbers digits reversed

// rules:
// - input is a positive integer
// - the digits need to be reversed
// - leading 0's in the result get dropped

// while we can use an array's built in reverse method for this, we'll attempt to do it without

// algorithm:
// - declare an empty array, call it `reversedDigits`
// - declare `numStr` and assign it the string representation of `num`
// - iterate through each digit of the numStr starting from the last index (numStr.length -1) to index 0:
//   - push that digit onto `reversedDigits` array
// - join the `reversedDigits` into a string without any delimiter, and convert that string into a number. return it

// code
function reverseNumber(num) {
  let reversedDigits = [];
  let numStr = String(num);
  for (let i = numStr.length - 1; i >= 0; i -= 1) {
    reversedDigits.push(numStr[i]);
  }
  return Number(reversedDigits.join(""));
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));
