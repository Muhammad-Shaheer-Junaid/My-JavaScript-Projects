// Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


document.write("<h1>Absolute Value Calculator</h1>");

document.write("<h2>1st Method</h2>");

var number = +prompt("Enter a number: ");
var absoluteValue;
if (number < 0) {
    absoluteValue = number * -1;
}
else absoluteValue = number;

document.write(`<h3>The absolute value of ${number} is: ${absoluteValue}</h3>`);

document.write("-----------------------------------------------------------------");

document.write("<h2>2nd Method</h2>");
absoluteValue = null;
absoluteValue = Math.abs(number);

document.write(`<h3>The absolute value of ${number} is: ${absoluteValue}</h3>`);