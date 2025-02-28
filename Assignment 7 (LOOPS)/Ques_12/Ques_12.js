// Write a program to print multiples of 5 ranging 1 to 100


// 1st Method
document.write(`1st Method: `)
for (var i = 1; i <= 20; i++) {
    document.write(`${5 * i},`)
}
document.write(`....`)
document.write(`<br>`)
document.write(`<br>`)


// 2nd Method
document.write(`2nd Method: `)
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) document.write(`${i},`)
}
document.write(`....`)