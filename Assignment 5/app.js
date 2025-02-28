// Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total 
// marks are 500 for each student, display the scores & percentages of students like:
// Score of Michael is 320. Percentage: 64%
// Score of John is 230. Percentage: 46%
// Score of Tony is 480. Percentage: 96%


var students = ["M.Shaheer", "M.Huzaifa", "M.Hussaib", "M.Umar", "M.Willayat", "Abdul Rehman"]
var scores = [490, 230, 480, 320, 350, 450]
const totalMarks = 500

document.write("<h1>MARKS OF STUDENTS</h1>")

for (i = 0; i < students.length; i++) {
    percentage = (scores[i] / totalMarks) * 100
    document.write(`<br>Score of ${students[i]} is ${scores[i]}. Percentage: ${percentage}%<br>`)
}
