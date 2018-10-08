function firstArray (arr) {
  let newArray = arr.shift()
  return [newArray]
}
console.log(firstArray([7, 9, 0, -2]))
console.log(firstArray([], 3))
console.log(firstArray([7, 9, 0, -2], 3))
console.log(firstArray([7, 9, 0, -2], 6))
console.log(firstArray([7, 9, 0, -2], -3))