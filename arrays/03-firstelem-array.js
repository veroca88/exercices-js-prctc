/* Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(firstArray([7, 9, 0, -2]));
console.log(firstArray([],3));
console.log(firstArray([7, 9, 0, -2],3));
console.log(firstArray([7, 9, 0, -2],6));
console.log(firstArray([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */
function firstArray (arr) {
  let newArray = arr.shift()
  return [newArray]
}
console.log(firstArray([7, 9, 0, -2]))
console.log(firstArray([], 3))
console.log(firstArray([7, 9, 0, -2], 3))
console.log(firstArray([7, 9, 0, -2], 6))
console.log(firstArray([7, 9, 0, -2], -3))
