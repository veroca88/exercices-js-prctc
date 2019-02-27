/* 23. Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100" */
function difference (arr1, arr2) {
  let twoInOneArr = arr1.concat(arr2)
  let newArr = []
  let object = {}
  let result = []

  flatten(twoInOneArr)
  function flatten (twoInOneArr) {
    twoInOneArr.forEach(number => {
      if (!Array.isArray(number)) {
        newArr.push(number)
      } else {
        flatten(number)
      }
    })
  }

  newArr.forEach(function (number) {
    if (!object[number]) { object[number] = 0 };
    object[number] += 1
  })

  for (let key in object) {
    if (object[key] === 1) {
      result.push(key)
    }
  }
  return result
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]))
// ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]))
// ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]))
// ["3", "10", "100"
