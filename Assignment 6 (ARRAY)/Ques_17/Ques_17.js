// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
// (FIFO-First In First Out)



document.write("<h1>FIFO ARRAY</h1> <br>")
var fifoArray = []
fifoArray.push("keyboard", "mouse", "printer", "monitor")
document.write(`<h3>Devices (In):</h3> ${fifoArray}`)

document.write("<br><br>")

for (var i = 0; i < fifoArray.length; i++) {
    var value = fifoArray[i]
    document.write(`<h3>Out:</h3> ${value}`)
}