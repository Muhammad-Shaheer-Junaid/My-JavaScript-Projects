// Write a program to identify the largest & the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

A = [24, 53, 78, 91, 12]

document.write(`Array Items: ${A}<br>`)
var largest = A[0]
var smallest = A[0]

for (var i = 0; i < A.length; i++) {
    if (A[i] > largest) largest = A[i]
}

for (var i = 0; i < A.length; i++) {
    if (A[i] < smallest) smallest = A[i]
}

document.write(`The Largest Number in Array is: ${largest}<br>`)
document.write(`The smallest Number in Array is: ${smallest}`)