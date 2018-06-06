// Object Literal
const person = {
    name: "Donray",
    age: 20
};
// Dot Notation
person.name = "Donray Williams";

// Bracket Notation
let selection = 'name';
person[selection] = "John";

console.log(person.name);

// Arrays
let selectedColors = []; // Empty Array

selectedColors[0] = "red";
selectedColors[2] = 3;
// Prints out red / empty / 3
console.log(selectedColors);
console.log(selectedColors.length);

// Functions 
// Fizz Buzz in JS
function FizzBuzz(i){
    let fizz = i % 3 == 0;
    let buzz = i % 5 == 0;
    
    return fizz && buzz ? "FizzBuzz " + i : fizz ? "Fizz " + i : buzz ? "Buzz " + i : i;
}
console.log("Begin Fizz Buzz");
let fizzBuzzArray = [];
for (i = 0; i <= 25; i++)
{
    fizzBuzzArray[i] = FizzBuzz(i);
}
console.log(fizzBuzzArray);