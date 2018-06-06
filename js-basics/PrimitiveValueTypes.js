// Getting the hang of using variables
let name = "Donray";
let number = 10;
console.log("Name: " + name, "Number: " + number);

const interestRate = 0.3;
//interestRate = 3 will throw an error because const
console.log(interestRate);

let stringVariable = "Apple"; // String
let age = 10; // Number
let isApproved = false; // Boolean
let firstName = undefined; // Is a type and also a value
let lastName = null;

// JS is a dynamic language
// type of variable can change at runtime
console.log(age + " type " + typeof age);
age = "10";
console.log(age + " type " + typeof age);