/*
input: number, call it n
output: none, logs to the console an 8-pointed star in an nxn grid

rules:
- n is odd
- n >= 7
- each consecutive line has an extra space between *'s
- middle line has n amount of stars
- there are n total lines

algorithm:
- declare lineStrArr = [];
- set middle line equal to '' padded with *'s to n length
- push that into lineStrArr
- let baseStars = '***'
- iterate from 0 to n / 2 - 1:
  - break baseStars into an array and pad each element with * to length 1 + i
  - join it back into string and pad the start with ' ' to the string's (length + n) / 2
  - push it into lineStrArr
- add take a slice of lineStrArr reverse it and add that to the beginning of lineStrArr
- for each line in lineStrArr:
  - log it
*/

function star(n) {
  let lineStrArr = [];

  // middle line
  lineStrArr.push("".padStart(n, "*"));

  // lines following middle line
  let baseStars = "***";
  for (let i = 0; i < n / 2 - 1; i += 1) {
    let lineStr = baseStars
      .split("")
      .map((star) => star.padStart(i + 1))
      .join("")
      .trim();
    lineStrArr.push(lineStr.padStart((lineStr.length + n) / 2));
  }

  // lines before middle line
  lineStrArr.unshift(...lineStrArr.slice(1).reverse());

  // print them all
  lineStrArr.forEach((lineStr) => {
    console.log(lineStr);
  });
}

star(7);

star(9);
