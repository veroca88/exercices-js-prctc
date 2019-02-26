/* 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]))
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true))
[1, 2, 3, [[4]], 5, 6] */
var flattenNestedArr = function (arr) {
  let newArr = []

  flatten(arr)
  function flatten (arr) {
    arr.forEach(element => {
      if (!Array.isArray(element)) {
        newArr.push(element)
      } else {
        flatten(element)
      }
    })
  }
  return newArr
}
console.log(flattenNestedArr(([1, [2], [3, [[4]]], [5, 6]])))
// [1, 2, 3, 4, 5, 6]
