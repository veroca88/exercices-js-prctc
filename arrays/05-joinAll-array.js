/* Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black" */
let singTheSong = ['Don\'t worry ', 'about a thing ', 'cause every little thing ', 'gonna be alright'].reduce(function (a, b) { return (a + b)});
console.log(singTheSong);
