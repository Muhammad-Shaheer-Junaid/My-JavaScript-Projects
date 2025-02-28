// Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]


A = [24, 53, 78, 91, 12]

document.write(`Array Items: ${A}<br>`)
var smallest = A[0]

for (var i = 0; i < A.length; i++) {
    if (A[i] < smallest) smallest = A[i]
}
document.write(`The smallest Number in Array is: ${smallest}`)