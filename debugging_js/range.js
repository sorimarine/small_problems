function range(...args) {
  let [start, end] = args.length > 1 ? [args[0], args[1]] : [0, args[0]];
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));
