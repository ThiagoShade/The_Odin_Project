// ThiagoShade
// The Odin Project - Foundations - Problem Solving - FizzBuzz

// Exercise: Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// let is a Javascript keyword that declares a local variable in the block scope. The variable will only be visible in the block and sub-blocks which it is declared.
// In another way, var is a keyword that declares a variable that will be visible in the entire function scope it was declared, or in the global scope if it was declared outside a function.
// parseInt is a function that analyses a number string and returns an integer number. If the value passed is not a number, it will return NaN (Not a Number).
// In this case we are using parseInt to convert the value of the prompt entered by the user to an integer number.
// The prompt function shows a popup in the browser just like alert, but with input field. The user can type a value and click OK to return the value typed.
let answer = parseInt(prompt("Type the desired number: "));

// The for loop in javascript is not very different from the for loop in C or Java. It has three parts: the initialization, the condition and the increment.
for (let i = 1; i <= answer; i++) {
    // The === operator is the strict equality operator. It compares the value and the type, so it will return true only if the value and the type are the same.
    // Example:
    // let x = 5;
    // let y = "5";
    // console.log(x == y); // true, because the value is equal
    // console.log(x === y); // false, because even if the value is equal, the type is different
    if (i % 3 === 0 && i % 5 === 0) {
        // The console object represents an interface to access the browser console. It is used to log messages, errors, warnings and other information for the main purpose of debugging.
        // It has functions like log, error, warn, info, etc.
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}