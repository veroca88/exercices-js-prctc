/* 8. Write a JavaScript program to find the most frequent item of an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var maxTimes = 1
var base = 0
for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) base++
    if (maxTimes < base) {
      maxTimes = base
      var frequentNumb = arr1[i]
    }
  }
  base = 0
}

console.log(frequentNumb + ' (' + maxTimes + ' times' + ')')
