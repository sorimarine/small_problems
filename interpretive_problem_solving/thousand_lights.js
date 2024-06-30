/*
input: number, amount of passes and switches. (count)
output: an array of lights that are on after `count` passes

rules:
- lights are numbered from 1 to `count`
- lights are all initially off
- first walk through, switch every lights
- second walk through, switch every 2nd lights
- third walk through switch every third light

algorithm:
- declare an object of lights from 1 to `count` inclusive:
  {
    1: false,
    2: false,
    ...
    `${count}`: false
  }
- iterate from pass 1 to count:
  - iterate from switch pass to count:
    - toggle boolean at lights[switch]
    - increment switch by pass
  - increment pass by 1
- get a list of key-value pairs of lights object and filter by whether the value is true
- transform the array of key-value pair to only its key converted to number
- return the transformed array
*/

function lightsOn(switches) {
  let lights = {};
  for (let num = 1; num <= switches; num += 1) {
    lights[num] = false;
  }

  for (let pass = 1; pass <= switches; pass += 1) {
    for (let switchNum = pass; switchNum <= switches; switchNum += pass) {
      lights[switchNum] = !lights[switchNum];
    }
  }

  return Object.entries(lights)
    .filter((light) => light[1])
    .map((light) => Number(light[0]));
}

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
