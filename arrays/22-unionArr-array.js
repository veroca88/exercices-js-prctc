/* 22. Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100] */
function unionArr (arr1, arr2) {
  let object = {}
  let result = []
  let twoInOneArr = arr1.concat(arr2)

  twoInOneArr.forEach(function (number) {
    if (!object[number]) { object[number] = 0 };
    object[number] += 1
  })

  for (let key in object) {
    if (object[key] <= 2) {
      result.push(key)
    }
  }
  return result
}
console.log(unionArr([1, 2, 3], [100, 2, 1, 10]))
// [1, 2, 3, 10, 100]
