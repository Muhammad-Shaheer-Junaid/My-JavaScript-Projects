// Write a function that takes first & last name and then it greets the user using his full name.


function greeting() {
    var first_name = prompt("Enter your First name: ");
    var last_name = prompt("Enter your Last name: ");
    document.write(`<h1>Greetings:</h1>`);

    document.write(`<br> <h3>Hi, What's up \"${first_name} ${last_name}\"</h3><br>`);
}