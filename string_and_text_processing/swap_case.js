/*
input: string
output: string

rules:
- output has lowercase character swapped to uppercase, upper case character swapped to lowercase
  - this is essentially just swap whatever case it is
  - we know upper/losercase opperations on nonalphabets don't change them

algorithm:
- break the string into an array of characters
- transform each character in the array:
  - if the character is lowercased, change it to uppercase
  - otherwise, change it to lowercase
- join the transformed array of characters into a string
- return the string
*/

function swapCase(string) {
  return string
    .split("")
    .map((char) =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
