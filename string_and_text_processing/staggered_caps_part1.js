/*
input: string
output: string

rules:
- output has:
  - first character capitalized
  - second character lowercased
  - third character capitalized
  - so on
- non-alphabet doesn't change, but should be counted

algorithm:
- split string into array of characters
- transform each character as so:
  - for even index, character is uppercased
  - for odd index, character is lowercased
- join the transformed array to a string
- return the string
*/

function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"
