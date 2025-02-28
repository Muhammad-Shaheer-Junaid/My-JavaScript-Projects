// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]


A = [24, 53, 78, 91, 12]

document.write(`Array Items: ${A}<br>`)
var largest = A[0]

for (var i = 0; i < A.length; i++) {
    if (A[i] > largest) largest = A[i]
}
document.write(`The Largest Number in Array is: ${largest}`)