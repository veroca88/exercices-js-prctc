/* 5. Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"RedGreenWhiteBlack"
"Red,Green,White,Black"
"Red+Green+White+Black" */
var myColor = ['Red', 'Green', 'White', 'Black']

console.log(myColor.join([',']))
console.log(myColor.join())
console.log(myColor.join(['+']))
