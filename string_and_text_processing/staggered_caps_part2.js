/*
input: string
output: string

rules:
- start with upper case letter
- swap case every other letter
- only alphabets count as letters
- don't count non-alphabets

algorithm:
- split the string into an array of characters
- set count to 0
- for each character in the array:
  - if the character is not an alphabet, skip iteration
  - if count is even, upper case
  - otherwise lowercase
  - increment count
- join character back into a string and return it
*/
function staggeredCase(string) {
  let chars = string.split("");
  let count = 0;
  for (let i = 0; i < chars.length; i += 1) {
    let char = chars[i].toLowerCase();
    if (char > "z" || char < "a") continue;

    if (count % 2 === 0) {
      char = char.toUpperCase();
    }

    chars[i] = char;
    count += 1;
  }
  return chars.join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
