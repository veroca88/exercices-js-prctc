/* 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). */
function removeDuplicates (arr) {
  var uniqueValues = [...new Set(arr)]
  console.log(uniqueValues)
}

removeDuplicates([2, 4, 5, 7, 5, 1, 9, 10, 2])
