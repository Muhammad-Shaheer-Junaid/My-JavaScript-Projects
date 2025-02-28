// Write a program to create the following patterns in your
// browser. Take number of lines as an input.
// a. *****
// *****
// *****
// *****
// b. *
// **
// ***
// ****
// *****
// c. *****
// ****
// ***
// **
// *

// PART A
let lines1 = +prompt("Enter the number of lines:");
let starsPerLine = +prompt("Enter the number of stars per line:");

for (let i = 0; i < lines1; i++) {
    let stars = "*".repeat(starsPerLine);
    document.write(stars + "<br>");
}
document.write("<br><br>")
//PART B
let lines2 = +prompt("Enter the number of lines:");

for (let i = 1; i <= lines2; i++) {
    let stars = "*".repeat(i);
    document.write(stars + "<br>");
}
document.write("<br><br>")
//PART C
let lines3 = +prompt("Enter the number of lines:");

for (let i = lines3; i > 0; i--) {
    let stars = "*".repeat(i);
    document.write(stars + "<br>");
}
document.write("<br><br>")