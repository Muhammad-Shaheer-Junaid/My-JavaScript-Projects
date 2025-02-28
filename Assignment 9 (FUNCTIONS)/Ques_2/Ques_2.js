// Write a function that displays current date & time in your browser.


function date_time() {
    document.write(`<h1>Current Date and Time:</h1>`);
    var date = new Date();
    var formatedDatetime = date.toLocaleString();
    document.write("<br>" + `<h3>${formatedDatetime}</h3>` + "<br>");
}