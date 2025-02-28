// Write a program to create a single string from the below 
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)


document.write("<h1>ARRAY TO STRING</h1> <br>")
var arr = ["This", "is", "my", "cat"]
document.write(`<h3>Array:</h3> ${arr}`)

var str = arr.join(" ")
document.write(`<h3>String:</h3> ${str}`)