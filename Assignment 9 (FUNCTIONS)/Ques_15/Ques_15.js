// You have an array:
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for loops.


A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
        document.write(A[i][j] + "<br><br>")
    }
}

// If we want output like PDF, then

document.write("<br><br> OUTPUT LIKE PDF: <br><br>")
for (var i = 0; i < A.length; i++) {
    document.write(A[i] + "<br><br>")

}