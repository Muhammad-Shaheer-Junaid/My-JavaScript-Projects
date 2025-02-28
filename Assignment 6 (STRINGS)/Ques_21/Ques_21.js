// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


document.write("<h1>STRING TO ARRAY CONVERSION</h1>")
var university = "University of Karachi";
university = university.split("");

for (var i = 0; i < university.length; i++) {
    document.write(`${university[i]} <br>`)
}