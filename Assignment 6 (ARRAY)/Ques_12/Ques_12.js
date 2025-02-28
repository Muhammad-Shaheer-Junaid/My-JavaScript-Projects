// Initialize an array with color names. Display the array elements in your browser.

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display
// the updated array in your browser.

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated
// array in your browser.

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// d. Delete the first color in the array. Display the updated array in your browser.

// e. Delete the last color in the array. Display the updated array in your browser.

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.Display
// the updated array in your browser.

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the
// same number of color(s) from user-defined position/index. . Display the updated array in your browser.

document.write("<h1>Color Array Manipulation</h1>")

var colors = ["red", "green", "blue"]

document.write(`Initial Array: ${colors} <br><br>`)

// Part A: Add a color to the beginning
document.write("<h3>PART A: ADDING COLOR TO THE START:</h3> <br>")
var addTostart = prompt("Enter what color do you want to ADD in the START of the ARRAY: ")
colors.unshift(addTostart)
document.write(`Updated Array: ${colors} <br><br>`)

// Part B: Add a color to the end
document.write("<h3>PART B: ADDING COLOR TO THE END:</h3> <br>")
var addToend = prompt("Enter what color do you want to ADD at the END of the ARRAY: ")
colors.push(addToend)
document.write(`Updated Array: ${colors} <br><br>`)

// Part C: Add two more colors to the beginning
document.write("<h3>PART C: ADDING TWO OR MORE COLORS TO THE BEGINNING:</h3> <br>")
while (true) {
    var add_two_or_more_tostart = prompt("ADD two more color to the BEGINNING of the ARRAY: ")
    if (add_two_or_more_tostart === null || add_two_or_more_tostart.trim() === "") {
        break
    }
    colors.unshift(add_two_or_more_tostart)
}
document.write(`Updated Array: ${colors} <br><br>`)

// Part D: Delete the first color in the array
document.write("<h3>PART D: DELETING THE FIRST COLOR IN THE ARRAY:</h3> <br>")
colors.shift()
document.write(`Updated Array: ${colors} <br><br>`)

// Part E: Delete the last color in the array
document.write("<h3>PART E: DELETING THE LAST COLOR IN THE ARRAY:</h3> <br>")
colors.pop()
document.write(`Updated Array: ${colors} <br><br>`)

// Part F: Add a color at a specific index
document.write("<h3>PART F: ADDING A COLOR AT A SPECIFIC INDEX OF THE ARRAY:</h3> <br>")
var indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"))
var colorToAdd = prompt("Enter the color name to add at that index:")
if (!isNaN(indexToAdd) && colorToAdd) colors.splice(indexToAdd, 0, colorToAdd)
document.write(`Updated Array: ${colors} <br><br>`)

// Part G: Delete colors from a specific index
document.write("<h3>PART G: DELETING COLOR(S) FROM A SPECIFIC INDEX:</h3> <br>")
var indexTodelete = parseInt(prompt("Enter the INDEX to start DELETING color(s):"))
var deleteCount = prompt("Enter HOW MANY colors to DELETE:")
if (!isNaN(indexTodelete) && deleteCount) colors.splice(indexTodelete, deleteCount)
document.write(`Updated Array: ${colors} <br><br>`)
