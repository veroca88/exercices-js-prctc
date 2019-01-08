/* 13.Write a JavaScript program to add items in an blank array and display the items.
Sample Screen : */

let emptyArr = []

function addItems (items) {
  for (let key in items) {
    emptyArr.push(items[key])
  }
  return emptyArr
}
let items = {
  itemOne: 'cat',
  itemTwo: 'dog',
  itemTree: 'bird'
}

console.log(addItems(items))
