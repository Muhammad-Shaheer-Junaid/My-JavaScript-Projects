// Write a function that adds two numbers (input by user) and returns the sum of two numbers.


function sum() {
    var num1 = +prompt("Enter First number: ");
    var num2 = +prompt("Enter Second number: ");
    document.write(`<h1>Sum of Two Numbers:</h1>`);
    document.write(`<br><h3>Sum of ${num1} and ${num2} is: ${num1 + num2}</h3><br>`);
}