// Create an object with properties name, email, password, age, 
// gender, city, country. 
// Check if age and country properties exist in object or not. 
// Also check firstName and lastName properties in object.

var obj = {
    name: "Muhammad Shaheer",
    email: "M.Shaheer@example.com",
    password: "123456",
    age: 25,
    gender: "Male",
    city: "Karachi",
    // country: "Pakistan"
}

if("age" in obj){
    console.log("Age property exists in object");
}
else{
    console.log("Age property does not exist in object");
}

if("country" in obj){
    console.log("country property exists in object");
}
else{
    console.log("country property does not exist in object");
}

if ('firstName' in obj || 'lastName' in obj) {
    console.log("The properties 'firstName' or 'lastName' exist.");
  } else {
    console.log("The properties 'firstName' and 'lastName' do not exist.");
  }