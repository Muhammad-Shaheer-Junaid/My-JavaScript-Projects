// Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.


var num = +prompt("Enter any number: ")

for (var i = num; i >= 0; i -= 0.5) {
    if (i == 0) {
        document.write(`${i}`)
        break
    }
    document.write(`${i}, `)
}