/* 2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */

// Option 1
function arrayCloneOne (arr) {
  let newArrayClone = []
  for (let i = 0; i < arr.length; i++) {
    newArrayClone = arr
  }
  console.log(newArrayClone)
}
// Option 2
function arrayCloneTwo (arr) {
  let newArray = [...arr]
  console.log(newArray)
}

// Option 3
function arrayCloneThree (arr) {
  console.log(arr.slice(0))
}

arrayCloneOne([1, 2, 4, 0])
arrayCloneTwo([1, 2, [4, 0]])
arrayCloneThree(['Hello', 'World'])
