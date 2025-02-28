// You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your browser using JS.

// STUDENTS    SCORES
//   Ali         58
//   Sami        73
//   Taha        89
//   Inam        90



var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

var html = "<table border='1' cellspacing='0' cellpadding='10'>"
html += "<tr><td>STUDENTS</td><td>SCORES</td></tr>"

for (var i = 0; i < students.length; i++) {
    html += `<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`;
}

html += "</table>"
document.write(html);