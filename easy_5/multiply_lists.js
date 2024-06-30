// input: two arrays, call them `nums1`, `mums2`
// output: one array, contains the product of each pair of numbers from the arguments that have the same index

// explicit:
// - the argument arrays contain the same number of elements
//
// implicit:
//

// data structures: array

// algorithm:
// - declare an empty array, call it `products`
// - start a loop that iterate from index 0 to the length of `nums1` - 1:
//   - push onto `products` the result of multiplying the values of the two arrays at current index together
// - return `products`

// code
function multiplyList(nums1, nums2) {
  let products = [];
  for (let i = 0; i < nums1.length; i += 1) {
    products.push(nums1[i] * nums2[i]);
  }
  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
