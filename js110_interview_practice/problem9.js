/*
input: string, string
output: number, the number of times the the second string occurs in the first string

rules:
- overlapping strings don't count
- the second argument is never an empty string

algorithm:
- split the first string, using the second string as the separator
- return the length of the resulting array - 1
*/

function countSubstrings(str1, str2) {
  return str1.split(str2).length - 1;
}

const p = console.log;
p(countSubstrings("babab", "bab") === 1);
p(countSubstrings("babab", "ba") === 2);
p(countSubstrings("babab", "b") === 3);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("", "x") === 0);
p(countSubstrings("bbbaabbbbaab", "baab") === 2);
p(countSubstrings("bbbaabbbbaab", "bbaab") === 2);
p(countSubstrings("bbbaabbbbaabb", "bbbaabb") === 1);
