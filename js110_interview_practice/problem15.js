/*
input: string (of digits)
output: number the greatest product of four consecutive digits

rules:
- string will always have more than 4 digits

algorithm:
- declare combos as an empty array
- start a loop from startIndex 0 to length - 4 inclusive:
    - add slice(startIndex, startIndex + 4) to combos
- transform the combos array, for each combo in combos:
  - start with product = 1
  - split the combo into a string of digits, and for each digit:
    - convert digit to number and set product = the number * product;
  - return product
- return the maximum of the products array
*/

function greatestProduct(string) {
  let combos = [];
  for (let startIndex = 0; startIndex <= string.length - 4; startIndex += 1) {
    combos.push(string.slice(startIndex, startIndex + 4));
  }

  let products = combos.map((combo) => {
    let product = 1;
    combo.split("").forEach((digit) => {
      product *= Number(digit);
    });
    return product;
  });

  return Math.max(...products);
}

const p = console.log;
p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6
