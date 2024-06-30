/*
input: number (n)
output: nothing. logs a diamond in an n x n grid

rules:
- input always an odd integer
- the grid the diamond is in is in n x n grid
- looks like first line logs floor(n/2) spaces + *
- each line has 2 more *'s and 1 less space beefore the first *
- there are n lines

algorithm:
- get an array representing the amount of stars for each line:
  - initialize an empty array, numStars
  - currAmount = 1
  - for line from 1 to less than n/2:
    - push currAmount onto numStars
    - increment currAmount by 2
  - push currAmount to numStars
  - for line from floor(n/2) to 1 inclusive:
    - decrement currAmount by 2
    - push currAmount onto numStars
  - return array

- for each number on the numStars array:
  - set the lineStr = '' padded with '*' to numStars length
  - set lineStr = lineStr padded to (numStars + n)/2
  - log lineStr
*/

function getNumStars(n) {
  let numStars = [];
  let currAmount = 1;
  for (let line = 1; line < n / 2; line += 1) {
    numStars.push(currAmount);
    currAmount += 2;
  }

  numStars.push(currAmount);

  for (let line = Math.floor(n / 2); line >= 1; line -= 1) {
    currAmount -= 2;
    numStars.push(currAmount);
  }

  return numStars;
}

function diamond(n) {
  let numStars = getNumStars(n);

  numStars.forEach((num) => {
    let lineStr = "".padStart(num, "*");
    lineStr = lineStr.padStart((num + n) / 2);
    console.log(lineStr);
  });
}

diamond(1);
/* logs

*

*/

diamond(3);
/* logs

 *
***
 *
 
*/

diamond(9);
/* logs

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
*/
