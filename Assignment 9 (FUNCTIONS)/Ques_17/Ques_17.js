// The even/odd reporter:
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and 
// report that to the screen (e.g. "2 is even").


for (var i = 0; i <= 20; i += 2) {
    document.write(`Even Numbers:<br>`)
    document.write(i + "<br>")
}
document.write("<br>")
document.write("<br>")

for (var i = 1; i <= 20; i += 2) {
    document.write(`Odd Numbers:<br>`)
    document.write(i + "<br>")
}

// For Output like PDF
document.write("<br>")
document.write("<br>")
document.write("For Output like PDF: <br><br>")

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) document.write(`${i} is EVEN <br>`)
    if (i % 2 == 1) document.write(`${i} is ODD<br>`)
}