// Write a program to take two input strings. Using string comparison, tell which string is greater than other or if they
// both are equal.

document.write("<h1>PHONE MANUFACTURERS</h1>")

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write(`<select>`)

for (i = 0; i < phoneManufacturers.length; i++) {
    document.write(`<option>${phoneManufacturers[i]}</option>`)
}

document.write(`</select>`)