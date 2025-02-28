// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write(`${fruits[i]} <br>`)
}
document.write("<br>")
for (var i = 0; i < fruits.length; i++) {
    document.write(`The element at index ${i} =  ${fruits[i]} <br>`)
}