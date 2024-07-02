// Given 2 strings, your job is to find out if there is a substring
// that appears in both strings. You will return true if you find a
// substring that appears in both strings, or false if you do not.
// We only care about substrings that are longer than one letter long.

/*[10:22, 10:36]
input: 2 strings
output: boolean, if there's a substring that appears in both strings

rules:
- substring is at least 2 letters long
- ignore case

algorithm:
- convert both strings to lowercase
- short = str2.length > str1.length? str2: str1
- long = str1 === short? str2: str1
- start a loop from startIndex 0 to startIndex length - 2(inclusive) of short:
  - get slice(startIndex, startIndex + 2)
  - if that slice is in the other string, return true
- return false

*/

function substringTest(str1, str2) {
  let short =
    str2.length > str1.length ? str2.toLowerCase() : str1.toLowerCase();
  let long =
    str1.length === short.length ? str2.toLowerCase() : str1.toLowerCase();

  for (let startIndex = 0; startIndex < short.length - 1; startIndex += 1) {
    if (long.includes(short.slice(startIndex, startIndex + 2))) return true;
  }

  return false;
}

console.log(substringTest("Something", "Fun") === false);
console.log(substringTest("Something", "Home") === true);
console.log(substringTest("Something", "Fun") === false);
console.log(substringTest("Something", "") === false);
console.log(substringTest("", "Something") === false);
console.log(substringTest("BANANA", "banana") === true);
console.log(substringTest("test", "lllt") === false);
console.log(substringTest("1234567", "541265") === true);
console.log(
  substringTest("supercalifragilisticexpialidocious", "SoundOfItIsAtrociou") ===
    true
);
