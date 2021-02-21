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
