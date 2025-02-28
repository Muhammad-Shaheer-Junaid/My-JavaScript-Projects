// Write a program to count number of vowels & consonants in given string:
// var str = “Pakistan”;


document.write("<h1>COUNTING VOWELS AND CONSONANTS</h1>");
var str = "Pakistan";
str = str.toLowerCase().split("");

var vowels = ["a", "e", "i", "o", "u"];
var vowelsCount = 0;
var consonantsCount = 0;

for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowelsCount++;
    else if (str[i] >= "a" && str[i] <= "z") consonantsCount++;
}
document.write(`<h3>No of Vowels:</h3> ${vowelsCount} <br> <h3>No of Consonants:</h3> ${consonantsCount}`);