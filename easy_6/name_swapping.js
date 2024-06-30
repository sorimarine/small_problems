/*
input: string, "firstname lastname"
output: string, "lastname, firstname"

rules:
can be seen in output and input

algorithm:
- split the string using " " as the separator, assign first element to first, second element to last
- return last + ', ' + first
*/

function swapName(name) {
  let [first, last] = name.split(" ");
  return `${last}, ${first}`;
}
console.log(swapName("Joe Roberts")); // "Roberts, Joe"
