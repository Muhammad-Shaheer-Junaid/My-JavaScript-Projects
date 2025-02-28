// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word
// “the” in given string.


document.write("<h1>COUNT WORD \"THE\" OCCURRENCES</h1>");
var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase().split(" ");

var selectedStr = "the";

var wordCount = 0

for (var i = 0; i < str.length; i++) {
    if (selectedStr.includes(str[i])) wordCount++;
}

document.write(`<h3>No of Word (The) in \"The quick brown fox jumps over the lazy dog\":</h3> ${wordCount}`);
