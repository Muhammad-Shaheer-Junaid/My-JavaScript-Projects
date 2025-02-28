// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var number = +prompt("Enter table Number: ")
var length = +prompt("Enter table Length: ")

for (var i = 1; i <= length; i++) {
    document.write(`${number} x ${i} = ${number * i} <br>`)
}