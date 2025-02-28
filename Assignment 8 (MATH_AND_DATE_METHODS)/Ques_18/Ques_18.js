// Write a program to calculate the product of the odd integers from 1 to 7.

var product = 1; // Initialize the product variable

for (var i = 1; i <= 7; i++) {
    if (i % 2 !== 0) {
        product *= i;
    }
}

document.write("The product of odd integers from 1 to 7 is: " + product);
