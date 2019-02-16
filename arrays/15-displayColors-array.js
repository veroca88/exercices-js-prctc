/* 15. We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red." */
function displayColors (color) {
  for (let i = 0; i < color.length; i++) {
    const j = (i + 1) % 10
    if (j === 1 || j === 2 || j === 3) {
      console.log((i + 1) + o[j] + ' choice is ' + color[i])
    } else {
      console.log((i + 1) + o[0] + ' choice is ' + color[i])
    }
  }
}
const o = ['th', 'st', 'nd', 'rd']
displayColors(['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'])
