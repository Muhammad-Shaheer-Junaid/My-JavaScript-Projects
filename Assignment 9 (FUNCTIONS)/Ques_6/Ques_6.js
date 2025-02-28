function square(num) {
    return num * num;
}

function showSquare() {
    const numInput = document.getElementById("numInput").value;

    const num = parseFloat(numInput);
    if (isNaN(num)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
    } else {
        const result = square(num);
        document.getElementById("result").innerText = `The square of ${num} is ${result}.`;
    }
}
