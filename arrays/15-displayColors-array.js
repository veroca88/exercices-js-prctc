/* 15. We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red." */
funcion displayColors (arr) {
  let newPositions = []
  for (let i = 0; i < arr.length; i++) {
    const numbersFirst = i % 10
    if (numbersFirst) {
      console.log(i + 'st' + ' choice is ' + arr[i])
    }
  }
}