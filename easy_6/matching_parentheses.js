/*
input: string
output: boolean

rules:
- returns true only if all parenthesis in the string are balanced
- parenthesis must occur in matching pairs
- a ) cant happen if theres no ( still unmatched

algorithm:
- set a counter to keep track of if there's a Parentheses open.
  called it openedCount. starts at 0
- iterate through each character of index 0 :
  - if the character is (, add one to counter
  - if the character is ), subtract 1 from counter
  - if openedCount < 0, return false
- if openedCount is 0, return true, otherwise return false
*/

function isBalanced(string) {
  let openedCount = 0;
  for (let i = 0; i < string.length - 1; i += 1) {
    let char = string[i];
    if (char === "(") {
      openedCount += 1;
    } else if (char === ")") {
      openedCount -= 1;
    }

    if (openedCount < 0) return false;
  }

  return openedCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
