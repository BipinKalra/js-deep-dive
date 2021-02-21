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
