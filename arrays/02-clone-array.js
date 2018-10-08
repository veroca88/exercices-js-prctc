/* 2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */

//Option 1
function arrayClone (arr) {
  for (let i = 0; i < arr.length; i++) {
    let newArrayClone = arr
    return newArrayClone
  }
}
//Option 2
function arrayClone(arr) {
  let newArray = [...arr]
  return newArray
}

console.log(arrayClone([1, 2, 4, 0]))
console.log(arrayClone([1, 2, [4, 0]]))
