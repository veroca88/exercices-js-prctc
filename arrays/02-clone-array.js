/* 2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */
function array_Clone (arr) {
  for (let i = 0; i < arr.length; i++) {
    let newArrayClone = arr
    return newArrayClone;
  }
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))
