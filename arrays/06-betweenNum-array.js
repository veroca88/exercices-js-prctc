/* 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. */
var dashEvenNumber = function (numbers) {
  var evenNumbers = ''
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) {
      evenNumbers += (numbers[i] + '-')
    } else {
      evenNumbers += numbers[i]
    }
  }
  console.log(evenNumbers)
  return evenNumbers
}

dashEvenNumber('025468')
