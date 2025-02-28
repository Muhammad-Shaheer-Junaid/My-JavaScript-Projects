// Write a program that takes a negative integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var number = +prompt("Enter a negative number: ");
document.write("Number: " + number + "<br>");
document.write("Round off value: " + Math.round(number) + "<br>");
document.write("Floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br>");
