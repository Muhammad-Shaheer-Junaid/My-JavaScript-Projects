// 1. Compute Factorial
function factorial(num) {
    if (num < 0) return "Factorial for negative numbers is undefined.";
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// 2. Display Counting Between Start and End Numbers
function displayCounting(start, end) {
    if (start > end) return "Start must be less than or equal to end.";
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result.join(", ");
}

// 3. Compute Hypotenuse Using Nested Functions
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

// 4. Write Variable Length Arguments
function writeArguments(...args) {
    return args.join(", ");
}

// 5. Find Largest Number in Variable Arguments
function findLargest(...numbers) {
    if (numbers.length === 0) return "No numbers provided.";
    return Math.max(...numbers);
}

// 6. Calculate Rectangle Area
function rectangleArea(width, height) {
    return width * height;
}

// 7. Sort an Array
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// 8. Sum of Array Elements
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 9. Execute and Monitor the Program
var param = function inner() {
    return typeof inner;
};
console.log("Output of param():", param());

// 10. Compute Power of a Number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// 11. Simulate Dice Roll
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// 12. Reverse a Number
function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""), 10);
}

// 13. Check Palindrome
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
}

// 14. Capitalize Each Word
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// 15. Find Longest Word
function findLongestWord(str) {
    return str.split(" ").reduce((longest, word) => (word.length > longest.length ? word : longest), "");
}

// 16. Count Vowels
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// 17. Return Argument Type
function getType(arg) {
    return typeof arg;
}

// 18. Extract Unique Characters
function extractUniqueChars(str) {
    return [...new Set(str)].join("");
}

// Example Usage
console.log("Factorial of 5:", factorial(5));
console.log("Counting from 3 to 8:", displayCounting(3, 8));
console.log("Hypotenuse of triangle with base 3 and perpendicular 4:", calculateHypotenuse(3, 4));
console.log("Variable arguments:", writeArguments(1, 2, 3, 4, 5));
console.log("Largest number:", findLargest(3, 7, 2, 9, 4));
console.log("Rectangle area (5x8):", rectangleArea(5, 8));
console.log("Sorted array:", sortArray([5, 2, 9, 1, 7]));
console.log("Sum of array elements:", sumArray([1, 2, 3, 4]));
console.log("2 to the power of 3:", power(2, 3));
console.log("Random dice roll:", rollDice());
console.log("Reversed number (12345):", reverseNumber(12345));
console.log("Is 'madam' a palindrome?", isPalindrome("madam"));
console.log("Capitalized words:", capitalizeWords("the quick brown fox"));
console.log("Longest word:", findLongestWord("Web Development Tutorial"));
console.log("Vowel count in 'The quick brown fox':", countVowels("The quick brown fox"));
console.log("Type of argument (42):", getType(42));
console.log("Unique characters:", extractUniqueChars("thequickbrownfoxjumpsoverthelazydog"));
