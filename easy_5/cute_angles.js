// input: number, call it `angle`
// output: string, reprenting the angle in degrees, minutes, and seconds of the given number

// explicit:
// - `angle` is between 0 and 360
// - `angle` is a floating point number
// - use ˚ to represent degrees, ' to represent minutes, and " to represent seconds
// - there are 60 minutes in a degree, and 60 seconds in a minute
// implicit:
// - 0 returns 0˚00'00"
// - there're always 2 digits of minutes and 2 digits of seconds
// - we get the minutes by analyzing the decimal portion of the input
// - we get minutes by analyzing the remainder after converting to minutes

// data structures
// - String is sure to have some valuable built-in methods

// algorithm:
// - set `MINUTES_IN_DEGREES` = 60
// - SET `SECONDS_IN_MINUTES` = 60
// - set `wholeDegrees` to the result of flooring `angle`
// - set `minutes` to (`angle` - `degrees`) * `MINUTES_IN_DEGREES`
// - set `wholeMinutes` to the result of flooring `minutes`
// - set `seconds` to (`minutes` - `wholeMinutes`) * `SECONDS_IN_MINUTES`
// - set `wholeSeconds to the result of flooring `seconds`
// - we need to format the minutes and seconds so that they always display 2 digits, let's call it `format2Digits`, with param `num`:
//   - convert `num` to a string, call it `numStr`
//   - if `num` is less than 10, pad the start of `numStr` with '0'
//   - return `numStr`
// - return wholeDegrees + '˚' + formatted wholeMinutes + "'" + formatted wholeSeconds + '"'

function format2Digits(num) {
  let numStr = String(num);
  return numStr.padStart(2, "0");
}

function dms(angle) {
  const MINUTES_IN_DEGREES = 60;
  const SECONDS_IN_MINUTES = 60;

  let wholeDegrees = Math.floor(angle);

  let minutes = (angle - wholeDegrees) * MINUTES_IN_DEGREES;
  let wholeMinutes = Math.floor(minutes);

  let seconds = (minutes - wholeMinutes) * SECONDS_IN_MINUTES;
  let wholeSeconds = Math.floor(seconds);

  return `${wholeDegrees}˚${format2Digits(wholeMinutes)}'${format2Digits(
    wholeSeconds
  )}"`;
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));
