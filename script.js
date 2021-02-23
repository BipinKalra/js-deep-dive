"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers // Parameters defined before it can be used in the expression
) {
  // Pre ES6 code
  // numPassengers = numPassengers || 1;
  // price = price || 200;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("BK123");
createBooking("BK123", 9);

const flight = "LH234";
const bipin = {
  name: "Bipin Kalra",
  passport: "1234567",
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH690";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 1234567) {
    console.log("Checked In!");
  } else {
    console.log("Wrong Passport!");
  }
};

checkIn(flight, bipin);
console.log(flight);
console.log(bipin);
// As we can see above, by running the function, the flight number doesnt change
// But the Name inside object does change
// This is because primitives are passed to functions as copies
// flightNum = flight
// On the other hand, objects are passed by references

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String - ${str}`);
  console.log(`Transformed String - ${fn(str)}`);
  console.log(`Transformed by - ${fn.name}`); // Name method for functions
};

transformer("Javascript is a fun language!", upperFirstWord);
transformer("Javascript is a fun language!", oneWord);

// Function returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Using arrow functions
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("Hey") returns a function which is then stored in the greeterHey variable
const greeterHey = greet("Hey");
greeterHey("Bipin");
// THIS WORKS BECAUSE OF CLOSURES
// Can also be done by clubbing the two calls
greet("Hello")("Bipin");

// Partial Application (Bind function)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addGST = addTax.bind(null, 0.18); // this keyword has been set to null
console.log(addGST(120));

function specificTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const addGST2 = specificTaxRate(0.28);
console.log(addGST2(200));


