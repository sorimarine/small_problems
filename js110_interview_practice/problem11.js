/*
input: string (`s`)
output: array ([string (`t`), number (`k`)])

rules:
- s === t * k
  - t should be the shortest possible substring, and k the largest possible repeat count that satisfies this equation
- all lowercase alphabetic letters

algorithm:
- get length of the string `s`, call it `length`
- declare result to [`s`, 1]
- iterate from 1, `end` as the count, to the length of the array:
  - if length % end !== 0, continue
  - declare currSlice to s.slice(0, `end`)
  - if `s` is equal to ''.pad(length, currSlice):
    - set result to [currSlice, length / end]
    - break out of the loop
- return result
*/

function repeatedSubstring(s) {
  let length = s.length;
  let result = [s, 1];

  for (let end = 1; end <= length; end += 1) {
    if (length % end !== 0) continue;

    let currSlice = s.slice(0, end);
    if (s === "".padEnd(length, currSlice)) {
      result = [currSlice, length / end];
      break;
    }
  }

  return result;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstring("superduper"), ["superduper", 1]));
