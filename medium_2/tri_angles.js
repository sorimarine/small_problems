/*
input: number, number, number
output: string

rules:
- 'invalid': to be valid:
  - sum of the three must be 180
  - every angle greater than 0
- 'obtuse':
  - one angle greater than 90
- 'right':
  - one angle 90
- all three less than 90

algrithm:
- put the angles into an array and sort it by ascending order
- deconstruct that array to smallest, mid, largest
- if smallest <= 0 or sum of them is not 180, return invalid
- if largest is greater than 90 return obtuse
- if largest is 90 return right
- return acute
*/

function triangle(angle1, angle2, angle3) {
  let [smallest, middle, largest] = [angle1, angle2, angle3].sort(
    (a, b) => a - b
  );

  if (smallest <= 0 || smallest + middle + largest !== 180) return "invalid";

  if (largest > 90) return "obtuse";

  if (largest === 90) return "right";

  return "acute";
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
