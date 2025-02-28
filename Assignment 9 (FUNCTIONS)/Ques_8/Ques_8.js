// You have an array:
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in 
// the list or not.


A = ["cake", "apple pie", "cookie", "chips", "patties"]
var userSearch = prompt("Enter name of the item you want to search for: ")
var match = false
for (var i = 0; i < A.length; i++) {
    if (userSearch.toLowerCase() == A[i].toLowerCase()) {
        alert("Item found! 😍😃")
        match = true
        break
    }
}
if (match == false) {
    alert("Item not found! 😒😢")
}