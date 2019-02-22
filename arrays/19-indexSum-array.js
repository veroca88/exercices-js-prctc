/* 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13] */
function indexSum (array1, array2) {
  let newSumIndex = []
  let value = 0
  while (value < array1.length && value < array2.length) {
    newSumIndex.push(array1[value] + array2[value])
    value++
  }
  if (array1.length === value) {
    for (var x = value; x < array2.length; x++) {
      newSumIndex.push(array2[x])
    }
  } else {
    for (var y = value; y < array1.length; y++) {
      newSumIndex.push(array1[y])
    }
  }
  return newSumIndex
}
let array1 = [1, 0, 2, 3, 4]
let array2 = [3, 5, 6, 7, 8, 13]
console.log(indexSum(array1, array2))
