/* 17. Write a JavaScript program to shuffle an array. */
Array.prototype.shuffle = function () {
  var newShuffle = this
  var end = newShuffle.length - 1
  for (var i = end; i >= 0; i--) {
    var randomIdx = Math.floor(Math.random() * (i + 1))
    var numberAtIdx = newShuffle[randomIdx]

    newShuffle[randomIdx] = newShuffle[i]
    newShuffle[i] = numberAtIdx
  }
  return newShuffle
}
let temporaryArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(temporaryArr.shuffle())
