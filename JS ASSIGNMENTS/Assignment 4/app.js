// Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array


var cars = ["AUDI RS e-tron GT", "BMW XM Label Red", "FORD Mustang GTD", "TOYOTA GR Supra", "FERRARI F80"]

document.write("<h1>CARS APP</h1>")

// Part a
document.write("<br>The First index of the array is: 0<br>")

// Part b
document.write(`<br>The Car at First index of array is: ${cars[0]}<br>`)

// Part c
document.write(`<br>The Last index of the array: ${cars.length - 1}<br>`)

// Part d
document.write(`<br>The Car at Last index of array is: ${cars[cars.length - 1]}<br>`)