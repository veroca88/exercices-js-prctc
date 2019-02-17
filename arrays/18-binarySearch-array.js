/* 18. Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); // */
function binarySearch (items, value) {
  items.forEach(element => {
    if (element === value) {
      console.log(items.indexOf(element))
    }
  })
}
var items = [1, 2, 3, 4, 5, 7, 8, 9]
binarySearch(items, 1)
binarySearch(items, 5)
binarySearch(items, 6)
