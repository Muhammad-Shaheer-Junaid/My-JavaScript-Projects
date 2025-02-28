// Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7
// *******
// ******
// *****
// ****
// ***
// **
// * 



var initialStars = +prompt("Enter the initial number of stars:")

for (var i = initialStars; i > 0; i--) {
    let stars = "*".repeat(i)
    document.write(stars + "<br>")
}