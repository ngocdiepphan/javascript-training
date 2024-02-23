//Function to sum two numbers:
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3)); // 8

//
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(20)); // 68

//Function that converts a string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(toUpperCase("hello")); //HELLO

// regular function
function getData() {
    return "hi!";
  }
  console.log(getData());//hi!

//Another regular function
function myFunc(theArr) {
    theArr[0] = 30;
  }
  const arr = [45];
  console.log(arr[0]); // 45
  
  myFunc(arr);
  console.log(arr[0]); // 30


//Print hello when calling the function:
// const name = "Diep";

// function greet() {
//   console.log("Hello, " + name + "!");
// }

// greet(); // Hello, Diep!

//
const name = "Diep";
const num1 = 10;
const num2 = 5;

function calculate() {
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  
  return name + ", the sum is " + sum + ", the difference is " + difference + ", the product is " + product + ", and the quotient is " + quotient + ".";
}

console.log(calculate()); // Diep, the sum is 15, the difference is 5, the product is 50, and the quotient is 2.
