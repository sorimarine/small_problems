// 2
/*
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of 
    occurences for each corresponding letter in the alphabet.

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.
*/

/*[10:32, 10:47]
input: string of random characters
output: string (26-characters long)

rules:
- return string is 26 places long, a string of digits
- each digit is the number of times the character corresponding to that space appeared in the string
- all characters given are in lowercase and will appear a maximum of 9 times
- we don't care about the non alphabets. only lowercase characters. that means don't count capital letters either

algorithm:
- declare an array called charCounts, initialize each element to 0:
  - pad '' with '0' to length 26, split by '', transform each element to Number
- filter the input string to only lowercase letters, using this criterion:
  - char >= 'a' char <= 'z'
- for each character in the filtered array:
  - increment the element at index that corresponds to that character in the charCounts array by 1
- return the charCounts array joined into string

to find index (char):
- return charCode of char - char code of 'a'
*/

let BASE_CODE = "a".charCodeAt();

function decrypt(string) {
  let charCounts = ""
    .padStart(26, "0")
    .split("")
    .map((digit) => Number(digit));

  let lowerChars = string
    .split("")
    .filter((char) => char >= "a" && char <= "z");

  lowerChars.forEach((char) => {
    charCounts[getIndex(char)] += 1;
  });

  return charCounts.join("");
}

function getIndex(char) {
  return char.charCodeAt() - BASE_CODE;
}

console.log(decrypt("$aaaa#bbb*ccfff!z") === "43200300000000000000000001");
console.log(
  decrypt("z$aaa#ccc%eee1234567890") === "30303000000000000000000001"
);
console.log(
  decrypt("the quick brown fox jumps over the lazy dog") ===
    "11113112111111411212211111"
);
console.log(decrypt("a1b2c3D4dda") === "21120000000000000000000000");
console.log(decrypt("a1aba2aca3aDaa4dda") === "91120000000000000000000000");
console.log(decrypt("1203904942@$2") === "00000000000000000000000000");
console.log(decrypt("ABCJDK3ROKGMIS3949") === "00000000000000000000000000");
console.log(decrypt("") === "00000000000000000000000000");
