/*
input: number, number, number
output: string

rules: 
- to be valud:
  - no side is 0
  - biggest side must be shorter than sum of the other two
- equilateral:
  - all three sides equal
- isosceles:
  - two sides equal
- scalene:
  - no sides are equal
  
algorithm:
- declare sides = [side1, side2, side3]
- sort the array in ascending order
- if first side is 0 or if first + second is not greater than third
   return 'invalid'
- if first === second === third, return 'equilateral'
- if first === second or second === third, return 'isosceles'
- return scalene
*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  if (sides[0] === 0 || sides[0] + sides[1] <= sides[2]) return "invalid";

  if (sides[0] === sides[1] && sides[1] === sides[2]) return "equilateral";

  if (sides[0] === sides[1] || sides[1] === sides[2]) return "isosceles";

  return "scalene";
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
