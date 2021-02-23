"use strict";

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 200 * numPassengers // Parameters defined before it can be used in the expression
// ) {
//   // Pre ES6 code
//   // numPassengers = numPassengers || 1;
//   // price = price || 200;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("BK123");
// createBooking("BK123", 9);

// const flight = "LH234";
// const bipin = {
//   name: "Bipin Kalra",
//   passport: "1234567",
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH690";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 1234567) {
//     console.log("Checked In!");
//   } else {
//     console.log("Wrong Passport!");
//   }
// };

// checkIn(flight, bipin);
// console.log(flight);
// console.log(bipin);
// // As we can see above, by running the function, the flight number doesnt change
// // But the Name inside object does change
// // This is because primitives are passed to functions as copies
// // flightNum = flight
// // On the other hand, objects are passed by references

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original String - ${str}`);
//   console.log(`Transformed String - ${fn(str)}`);
//   console.log(`Transformed by - ${fn.name}`); // Name method for functions
// };

// transformer("Javascript is a fun language!", upperFirstWord);
// transformer("Javascript is a fun language!", oneWord);

// // Function returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // Using arrow functions
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // greet("Hey") returns a function which is then stored in the greeterHey variable
// const greeterHey = greet("Hey");
// greeterHey("Bipin");
// // THIS WORKS BECAUSE OF CLOSURES
// // Can also be done by clubbing the two calls
// greet("Hello")("Bipin");

// // Partial Application (Bind function)
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addGST = addTax.bind(null, 0.18); // this keyword has been set to null
// console.log(addGST(120));

// function specificTaxRate(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

// const addGST2 = specificTaxRate(0.28);
// console.log(addGST2(200));

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: C++", "2: Python", "3: GoLang"],
  answers: new Array(4).fill(0),
};

poll.resgisterNewAnswer = function () {
  const choice = Number(prompt(`${this.question}\n${this.options.join("\n")}`));
  if (choice < 4 && choice >= 0) poll.answers[choice]++;

  this.displayResults();
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.resgisterNewAnswer.bind(poll));

poll.displayResults = function (type = "array") {
  if (type == "array") {
    console.log(this.answers);
  } else if (type == "string") {
    console.log(`Poll results are ${this.answers.join(", ")}`);
  }
};

// Binding the function to another this keyword by passing a different object using call function
poll.displayResults.call({ answers: [5, 6, 7, 8] }, "string");

// IIFEs

(function () {
  console.log("This is an IIFE!");
})();

(() => console.log("IIFE for an arrow function"))();

// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// Closure can be seen here but being an internal property, it cant be explicitly used
console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 77;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // f() closes over the variable environment of g() function as it is defined within the scope of the g() function

// Reassigning f()
h();
f(); // Closure changes on reassiging the function
