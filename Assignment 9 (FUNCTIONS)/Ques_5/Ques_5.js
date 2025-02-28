// Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show 
// the desired result in your browser.

function calc() {
    var num1 = +prompt("Enter First number: ");
    var num2 = +prompt("Enter Second number: ");
    var sign = prompt("Enter an operator (+, -, ×, ÷): ");
    // var operator = ["Sum", "Subtraction", "Multiplication", "Division"];
    var result;
    document.write(`<h1>Calculator:</h1>`);
    if (sign === "+") {
        result = num1 + num2;
        document.write(`<br><h3>The Sum of ${num1} and ${num2} is: ${result}</h3><br>`);
    }
    else if (sign === "-") {
        result = num1 - num2;
        document.write(`<br><h3>The Subtraction of ${num1} and ${num2} is: ${result}</h3><br>`);
    }
    else if (sign === "/" && num2 !== 0) {
        result = num1 / num2;
        document.write(`<br><h3>The Division of ${num1} and ${num2} is: ${result}</h3><br>`);
    }
    else if (sign === "*") {
        result = num1 * num2
        document.write(`<br><h3>The Multiplication of ${num1} and ${num2} is: ${result}</h3><br>`);
    }
}