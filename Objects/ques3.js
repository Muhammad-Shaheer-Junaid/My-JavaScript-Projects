// Create a constructor function with some properties. Now 
// create multiple records using the constructor.

function Person(name, age, field){
    this.name = name;
    this.age = age;
    this.field = field;
}

var person1 = new Person("Shaheer", 20, "Software Engineering")
var person2 = new Person("Usman", 21, "Computer Science")
var person3 = new Person("Ahsan", 22, "Computer Science")

console.log(person1.name, person1.age, person1.field)
console.log(person2.name, person2.age, person2.field)
console.log(person3.name, person3.age, person3.field)