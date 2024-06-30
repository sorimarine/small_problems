// input: string, representing time of day in 24 hr fourmat (hh:mm), call it timeStr
// output:
// - afterMidnight: number of minutes after midnight
// - beforeMidnight: number of minutes before midnight

// explicit:
// - return values are between 0 and 1439
// - time given is in 24hr format
// implicit:
// - input string in format "hh:mm"
// - return value at 24:00 and 00:00 should be 0 for both functions

// algorithm:
// - set HOURS_IN_DAY = 24
// - set MINUTES_IN_HOURS = 60
//
// afterMidnight
// =============
// - split the `timeStr` into `timeStrArray` using `:` as the delimiter
//   - calculate hours by converting the first element of timeStrArray to a number
//   - calculate minutes by converting the second element of timeStrArray to a number
// - calculate minutesAfter by multiplying the number of hours * MINUTES_IN_HOURS and add the number of minutes
//
// beforeMidnight
// ==============
// - getNumHoursAndMinutes and set it to hours and minutes
// - minutesBefore is (HOURS_IN_DAY - hours) * MINUTES_IN_HOUR - minutes

// code
let MINUTES_IN_HOUR = 60;
let HOURS_IN_DAY = 24;
let MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

function getNumHoursAndMinutes(timeStr) {
  let timeStrArray = timeStr.split(":");
  let hours = Number(timeStrArray[0]);
  let minutes = Number(timeStrArray[1]);
  return [hours, minutes];
}

function afterMidnight(timeStr) {
  let [hours, minutes] = getNumHoursAndMinutes(timeStr);

  return (hours * MINUTES_IN_HOUR + minutes) % MINUTES_IN_DAY;
}

function beforeMidnight(timeStr) {
  let [hours, minutes] = getNumHoursAndMinutes(timeStr);
  return ((HOURS_IN_DAY - hours) * MINUTES_IN_HOUR - minutes) % MINUTES_IN_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
