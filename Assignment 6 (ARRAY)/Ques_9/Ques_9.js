// Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & 
// length of array in your browser. (Use array's length method)

var movies = []
movies.push("The Matrix", "Enola Holmes", "Alita Battle Angel")
movies.unshift("Inception", "Enola Holmes", "The Lord of the Rings: The Return of the King")

document.write("<h1>TOP MOVIES</h1>")
for (i = 0; i < movies.length; i++) {
    document.write(i + 1 + ') ' + movies[i] + '<br>')
}
document.write(`<br>The Length of Array is: ${movies.length}`)