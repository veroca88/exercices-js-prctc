/* 43. Write a Javascript function to return the numbers of truthy
value of our array. */
function countTruthly (array) {
  let count = 0
  for (let value of array)
    if (value)
      count++
  return count
}
const array = [0, 1, 2, 3, false, undefined]
console.log(countTruthly(array))
