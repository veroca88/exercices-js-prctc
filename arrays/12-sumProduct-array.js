/* 12. Write a JavaScript program to compute the sum and product of
an array of integers. */
var sumProduct = (arr) => {
  var sum = 0
  var product = 1
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
    product *= arr[i]
  } console.log(sum)
  console.log(product)
}

sumProduct([2, 4, 7, 1, 6])
