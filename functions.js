//Lab 1 - lesson-w01d03-js

//1

const youRock = function(name) {
  console.log("You rock " + name + "!");
};

//2

const square = function(num) {
  console.log(Math.pow(num, 2));
};

//3

const cube = function(num) {
  console.log(Math.pow(num, 3));
};

//4
const toTheFourth = function(num) {
  console.log(Math.pow(num, 4));
};

//EXTRA
const calculator = function(num1, num2, method) {
  if ((num1 = !Number && method === "add")) {
    console.log(" calculator only accepts numbers ");
  } else if (method === "add") {
    console.log(num1 + num2 + " you have used add ");
  } else if (method === "subtract") {
    console.log(num1 - num2 + " you have used subtract ");
  } else if (method === "divide") {
    console.log(num1 / num2 + " you have used divide ");
  } else if (method === "multiply") {
    console.log(num1 * num2 + " you have used multiply ");
  } else if (method === "something else") {
    console.log(" calculator can only add, subtract, divide, or multiply ");
  }
};

//Lab 2
const rainDrop = function(number) {
  // Initialize variables
  result = "";

  // Check for the conditions and concatenate
  if (number % 3 === 0) {
    result = result + "Pling";
  }
  if (number % 5 === 0) {
    result += "Plang";
  }
  if (number % 7 === 0) {
    result += "Plong";
  }

  if (result) {
    console.log(result);
  } else {
    console.log(number);
  }
};

//lab 3 fizzbuzz-function

const fizzBuzz = function(num) {
  // Initialize variables
  result = "";

  // Check for the conditions and concatenate
  if (num % 3 === 0) {
    result = result + "Fizz";
  }
  if (num % 5 === 0) {
    result += "Buzz";
  }

  if (result) {
    console.log(result);
  } else {
    console.log(num);
  }
};
