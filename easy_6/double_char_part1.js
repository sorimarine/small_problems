// input: string, `str`
// output: string, with every character repeated

// algorithm:
// - declare an emptry string, `doubled`
// - for each `char` in `str`:
//   - concatenate `char` to doubled twice
// - return doubled;

// code
function repeater(str) {
  let doubled = "";
  for (let i = 0; i < str.length; i += 1) {
    doubled += str[i] + str[i];
  }
  return doubled;
}

console.log(repeater("Hello"));
console.log(repeater("Good job!"));
console.log(repeater(""));
