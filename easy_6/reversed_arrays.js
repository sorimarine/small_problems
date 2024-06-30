/*
input: array
output: array

rules:
- output array is the same array as input (mutate it)
- output array reverses the elements of input array
- do not use built in reverse method
- array can be empty

algorithm:
- iterate from `index` 0 to length/2 - 1, floored:
  - declare a temp variable to hold element at current index
  - get the element at index length - 1 - index and put it at current index
  - put the element from temp variable at index length - 1 - index
- return array
*/

function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i += 1) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
