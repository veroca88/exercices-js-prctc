/* 20. Write a JavaScript program to find duplicate values in a JavaScript array. */
function findDuplicates (arr) {
  let object = {}
  let result = []

  arr.forEach(function (number) {
    if (!object[number]) { object[number] = 0 }
    object[number] += 1
  })

  for (let key in object) {
    if (object[key] >= 2) {
      result.push(key)
    }
  }
  return result
}

console.log(findDuplicates([2, 3, 4, 2, 5, 6, 4, 7, 8, 2, 6, 9]))
