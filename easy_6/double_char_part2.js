// input: string, `str`
// output: string, with every character repeated

// algorithm:
//
// isConsonant
// ===========
// - if lowercased char <= 'z' and >= 'a' and is not in ['a', 'e', 'i', 'o', 'u'], return true
// - otherwise return false
//
// main
// ====
// - declare an empty string, `result`
// - for each character in `str`:
//   - concatenate the character to `result`
//   - if the character is a consonant, concatenate it to `result` again

// code
function doubleConsonants(str) {
  let result = "";
  str.split("").forEach((char) => {
    result += char;
    if (isConsonant(char)) {
      result += char;
    }
  });
  return result;
}

function isConsonant(char) {
  char = char.toLowerCase();
  return (
    !["a", "e", "i", "o", "u"].includes(char) && char <= "z" && char >= "a"
  );
}

console.log(doubleConsonants("String"));
console.log(doubleConsonants("Hello-World!"));
console.log(doubleConsonants("July 4th"));
console.log(doubleConsonants(""));
