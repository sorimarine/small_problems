// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// All given inputs are in lowercase letters a-z.

/*[10:41, 10:52]
input: array (of strings)
output: string (the longest common prefix string amonst the strings)

rules:
- if no common, return empty string
- all inputs are lowercase letters
- same word returns the word

algorithm:
- sort the array of strings by length
- declare common = ""
- declare shortestStr = strings[0]
- start a loop from sliceLength 1 to length of the shortestStr, inclusive:
  - declare currSlice = slice(0, sliceLength);
  - start a loop from index 1 to length of the strings array - 1:
    - if currSlice is NOT equal the slice(0, sliceLength) of the string at that index:
      - return common
  - assign currSlice to common
- return common
*/

function commonPrefix(strings) {
  let sortedStrings = strings.slice().sort((a, b) => a.length - b.length);
  let common = "";
  let shortestStr = strings[0];

  for (
    let sliceLength = 1;
    sliceLength <= shortestStr.length;
    sliceLength += 1
  ) {
    let currSlice = shortestStr.slice(0, sliceLength);

    for (let index = 1; index < sortedStrings.length; index += 1) {
      if (currSlice !== sortedStrings[index].slice(0, sliceLength))
        return common;
    }

    common = currSlice;
  }

  return common;
}

console.log(commonPrefix(["flower", "flow", "flight"]) === "fl");
console.log(commonPrefix(["dog", "racecar", "car"]) === "");
console.log(
  commonPrefix(["interspecies", "interstellar", "interstate"]) === "inters"
);
console.log(commonPrefix(["throne", "dungeon"]) === "");
console.log(commonPrefix(["throne", "throne"]) === "throne");
