// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

document.write("<h1>Dice Simulation</h1>");

var dice = Math.floor(Math.random() * 6) + 1;
document.write(`<h3>Dice Value: ${dice}</h3>`);
