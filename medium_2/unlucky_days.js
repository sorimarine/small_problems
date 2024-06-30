/*
input: number (4-digit year)
output: the amount of friday the thirteenth that happened that year

rules when dealing with dates:
- january is monthindex 0
- sunday is dayindex 0
- input is 4 digit year

algorithm:
- start a count at 0
- start a monthIndex at 0
- iterate from 0 to 11:
  - declare a date using (year, monthIndex, 13)
  - get day and if its equal to 5 (fridays day index), increment count
- return count
*/

function fridayThe13ths(year) {
  let count = 0;
  for (let monthIndex = 0; monthIndex < 12; monthIndex += 1) {
    let date = new Date(year, monthIndex, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
