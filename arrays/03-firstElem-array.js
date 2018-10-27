/* 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output:
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */
function first (arr, n) {
  if (arr.length > 0 && n > 0) {
    return arr.slice(0, (n))
  } else if (arr.length > 0 && n < 0) {
    return arr.slice(0, (n - 1))
  } else if (arr.length === 0) {
    return arr.slice(0, (n - 1))
  } else if (n == null) {
    return arr[0]
  }
}
console.log(first([7, 9, 0, -2]))
console.log(first([], 3))
console.log(first([7, 9, 0, -2], 3))
console.log(first([7, 9, 0, -2], 6))
console.log(first([7, 9, 0, -2], -3))
