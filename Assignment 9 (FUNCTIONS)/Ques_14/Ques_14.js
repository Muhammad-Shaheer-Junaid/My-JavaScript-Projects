// Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34


var scores = [12, 45, 3, 22, 34, 50]
document.write(`The given array is: ${scores} <br><br>`)

var stop = +prompt("[12, 45, 3, 22, 34, 50]\nEnter an number where you want to Stop: ")

for (var i = 0; i <= scores.length; i++) {
    document.write(scores[i] + "<br><br>")
    if (stop == scores[i]) break
}