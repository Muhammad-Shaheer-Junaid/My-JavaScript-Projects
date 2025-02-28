// Create a new array. Store values one by one in such a way that you can access the values in reverse order.
// (Last In-First Out)


document.write("<h1>LILO ARRAY</h1> <br>")
var liloArray = []
liloArray.push("keyboard", "mouse", "printer", "monitor")
document.write(`<h3>Devices (In):</h3> ${liloArray}`)

document.write("<br><br>")

for (var i = liloArray.length - 1; i >= 0; i--) {
    var value = liloArray[i]
    document.write(`<h3>Out:</h3> ${value}`)
}