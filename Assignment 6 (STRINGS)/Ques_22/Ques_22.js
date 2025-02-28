// Write a program to display the last character of a user input.

document.write("<h1>LAST CHARACTER OF USER INPUT</h1>")

var userInput = prompt("Enter any word you want:")

document.write(`<h3>The letter at the END of the user input is: </h3> ${userInput[userInput.length - 1]}`)