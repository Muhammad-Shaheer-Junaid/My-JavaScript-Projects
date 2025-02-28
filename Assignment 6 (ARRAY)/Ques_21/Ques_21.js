// Declare and initialize a multidimensional array representing the following matrix:
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1

document.write("<h1>Multidimensional Array</h1>")
var multidimensional_array = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
multidimensional_array.forEach(row => {
    document.write(row.join(" ") + "<br>")
});
