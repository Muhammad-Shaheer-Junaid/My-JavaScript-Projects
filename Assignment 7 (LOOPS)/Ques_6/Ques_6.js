// Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.

var items = []
var numberOfitems = +prompt("Enter number of items: ")
document.write(`No of items in Array: ${numberOfitems} <br><br>`)

for (var i = 0; i < numberOfitems; i++) {
    var addItems = prompt(`Enter item ${i + 1}: `)
    items.push(addItems)
}
for (var i = 0; i < items.length; i++) {
    document.write(`${i + 1}) ${items[i]} <br>`)
}