/*
input: string
output: object

rules:
- return object:
  {
    lowercase: (number),
    uppercase: (number),
    neither: (number)
  }
- empty string means 0 for all 3

algorithm:
- declare object, `result`:
  {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }
- split the string into an array of characters
- for each `char` in the array of characters:
  - if the character is not an alphabet:
    - increment result.neither
    - break out of this iteration
  - if the character is equal to its uppercased self, increment result.uppercase
  - else increment result.lowercase
- return the `result`

to check if a character is an alphabet:
- its lowercased self must be between 'a' and 'z', inclusive
*/

function isAlphabet(char) {
  return char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
}

function letterCaseCount(string) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  string.split("").forEach((char) => {
    if (!isAlphabet(char)) {
      result.neither += 1;
      return;
    }

    if (char === char.toUpperCase()) {
      result.uppercase += 1;
    } else {
      result.lowercase += 1;
    }
  });

  return result;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
