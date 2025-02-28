// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.


document.write("<h1>CITIES OF PAKISTAN</h1>")
var city_names = ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan", "Rawalpindi", "Faisalabad", "Sialkot"]
document.write(`Cities list: ${city_names} <br><br>`)
var selectedCities_names = city_names.slice(0, 5)
var selectedCities_names_1 = city_names.slice(6, 7)
document.write(`Selected Cities list: ${selectedCities_names},${selectedCities_names_1} <br><br>`)



// "Karachi", "Hyderabad", "Lahore", "Islamabad", "Quetta", "Multan"