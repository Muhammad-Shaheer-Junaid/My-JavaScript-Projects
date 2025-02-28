// Write a program to take password as an input from user. The password must qualify these requirements:

// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long

// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

document.write("<h1>PASSWORD VALIDATION</h1>");

function hasAlphabet_hasNumber(input) {
    var hasAlphabet = false;
    var hasNumber = false;

    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (isNaN(char)) {
            hasAlphabet = true;
        }

        if (!isNaN(char)) {
            hasNumber = true;
        }
    }
    if (hasAlphabet == true && hasNumber == true) {
        return true;
    }
    else {
        return false;
    }
}

while (true) {
    var input = prompt("Enter Password: ");

    if (input === null || input.trim() === "" || !input) {
        alert("The Password can not be Empty!\nPlease! Enter a valid Password!");
        continue;
    }

    if (!isNaN(input.charAt(0))) {
        alert("The Password can not start with a number!\nPlease! Enter a valid Password!");
        continue;
    }
    if (input.length < 6) {
        alert("Password can not be smaller than 6 characters!\nPlease Enter a Password at least 6 characters long!  ");
        continue;
    }
    if (!hasAlphabet_hasNumber(input)) {
        alert("Password must contain both alphabets and numbers!\nTry again please!");
        continue;
    }
    alert("Password is valid!");
    document.write("<h3>Your password is valid.</h3>");
    break;
}