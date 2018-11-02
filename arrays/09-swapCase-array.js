/* 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. */
var swapCase = function (letters) {
  var swapEachCharacter = ''
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
      swapEachCharacter += letters[i].toLowerCase()
    } else {
      swapEachCharacter += letters[i].toUpperCase()
    }
  }
  console.log(swapEachCharacter)
  return swapEachCharacter
}

swapCase('The Quick Brown Fox')
