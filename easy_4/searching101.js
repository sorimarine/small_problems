// Easy 4: 1. Searching 101
// input:
//   - 6 total inputs, solicit the user for them
//   - each input is a number
// output:
//   - a string that describes whether or not the sixth number appears among the first five numbers
//
// explicit:
//   - solicit the user for 6 numbers
//   - say the first five numbers appear in the first five numbers if the first five numbers include them
//   - otherwise say it does not appear
// implicit:
//   - inputs are actually of type string. will have to convert to number if we MUST deal with them as numbers.
//     I don't think we have to
//   - We're assuming we don't have to check for invalid inputs here.
//
// Example included
//
// Data Structure:
//   - Array has a convenient menthod, includes
//
// Algorithm:
// - set an empty array `firstFive`
// - prompt the user for the first number and append it to `firstFive`
// - prompt the user for the second number and append it to `firstFive`
// - prompt the user for the third number and append it to `firstFive`
// - prompt the user for the fourth number and append it to `firstFive`
// - prompt the user for the fifth number and append it to `firstFive`
// - prompt the user for the sixth number and set it as `sixthNum`
// - convert firstFive to string and set it as `firstFiveStr`
// - if `sixthNum` is in `firstFive`:
//   - log The number `sixthNum` appears in `firstFiveStr`.
// - else:
//   - log The number `sixthNum` does not appear in `firstFiveStr`.

// Code
const readlineSync = require("readline-sync");

function searching101() {
  let firstFive = [];
  console.log("Enter the 1st number: ");
  firstFive.push(readlineSync.prompt());
  console.log("Enter the 2nd number: ");
  firstFive.push(readlineSync.prompt());
  console.log("Enter the 3rd number: ");
  firstFive.push(readlineSync.prompt());
  console.log("Enter the 4th number: ");
  firstFive.push(readlineSync.prompt());
  console.log("Enter the 5th number: ");
  firstFive.push(readlineSync.prompt());
  console.log("Enter the 6th number: ");
  let sixthNum = readlineSync.prompt();

  let firstFiveStr = firstFive.join(",");

  if (firstFive.includes(sixthNum)) {
    console.log(`The number ${sixthNum} appears in ${firstFiveStr}`);
  } else {
    console.log(`The number ${sixthNum} does not appear in ${firstFiveStr}`);
  }
}

searching101();
