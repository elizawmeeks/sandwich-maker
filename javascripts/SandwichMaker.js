"use strict";

  // Private variable to store the different meat prices
let sandwich = {};
var totalPrice = 0;

  // Augment the original object with another method
sandwich.addTopping = function(toppingPrice) {
  totalPrice += toppingPrice;
  var write = $("#stickItHere");
  console.log("totalPrice", totalPrice);
  write[0].innerHTML = "<h3 class='center-align'>$" + totalPrice.toFixed(2) + "</h3>";
};

  // Return the new, augmented object with the new method on it
module.exports = sandwich;