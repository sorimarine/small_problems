/*
input: string
output: object, a hash

rules:
- the keys represent the lowercase letters in the string
- values are how often the corresponding letter occurs in the string
- ignore everything other than alphabets
- empty string returns an empty object
- we only care about lowercase characters

algorithm:
- declare an empty object to keep the hash, `hash`
- split the string into an array of characters
- filter the array for only alphabets in lowercase:
  - the the character has to be >= 'a' and <= 'z'
- for each character in that filtered array:
  - if the character is already in the hash, increment the value by 1
  - otherwise, set the value for hash[character] to 1
- return the hash
*/

function countLetters(string) {
  let hash = {};
  string
    .split("")
    .filter((char) => {
      return char >= "a" && char <= "z";
    })
    .forEach((character) => {
      if (hash[character]) {
        hash[character] += 1;
      } else {
        hash[character] = 1;
      }
    });

  return hash;
}

const p = console.log;
const objeq = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

let expected = { w: 1, o: 2, e: 3, b: 1, g: 1, n: 1 };
p(objeq(countLetters("woebegone"), expected));

expected = { l: 1, o: 1, w: 1, e: 4, r: 2, c: 2, a: 2, s: 2, u: 1, p: 2 };
p(objeq(countLetters("lowercase/uppercase"), expected));

expected = { u: 1, o: 1, i: 1, s: 1 };
p(objeq(countLetters("W. E. B. Du Bois"), expected));

p(objeq(countLetters("x"), { x: 1 }));
p(objeq(countLetters(""), {}));
p(objeq(countLetters("!!!"), {}));
