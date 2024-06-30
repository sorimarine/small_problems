// input: integer, representing minutes before or after midnight, `minutesAfter`
// output: string, the time of day in 24 hour format (hh:mm)

// explicit:
// - input is integer
// - input can be any integer (negative, 0, positive)
// - negative integer represents minutes before midnight
// - positive integer represents minutes after midnight
// - do not use the `Date` class methods
// implicit:
// - minutes can go past 24 hours

// algorithm:
// - set MINUTES_IN_HOUR = 60
// - set MINUTES_IN_DAY = MINUTES_IN_HOUR * 24
// - get the hour by:
//   - set `minutesAfter` to `minutesAfter` % MINUTES_IN_DAY
//   - set hourAmount to `minutesAfter` / MINUTES_IN_HOUR, floored
//   - set hour to hourAmount if hourAmount positive, otherwise hourAmount + 24
// - get minute by:
//   - set minuteMount to `minutesAfter` % MINUTES_IN_HOUR
//   - set minute to minuteAmount if minuteAmount positive, otherwise minuteAmount + 60
// - pad the hours and minutes to return string in this format (hh:mm)

let HOURS_IN_DAY = 24;
let MINUTES_IN_HOUR = 60;
let MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

function padStart2digits(num) {
  return String(num).padStart(2, "0");
}

function timeOfDay(minutesAfter) {
  minutesAfter = minutesAfter % MINUTES_IN_DAY;
  let hourAmount = Math.floor(minutesAfter / MINUTES_IN_HOUR);
  let hour = hourAmount >= 0 ? hourAmount : hourAmount + HOURS_IN_DAY;

  let minuteAmount = minutesAfter % MINUTES_IN_HOUR;
  let minute =
    minuteAmount >= 0 ? minuteAmount : minuteAmount + MINUTES_IN_HOUR;

  return `${padStart2digits(hour)}:${padStart2digits(minute)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
