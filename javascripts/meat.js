"use strict";

  // Private variable to store the different meat prices
var meatPrices = [{turkey: 0.90}, {ham: 0.80}, {lamb: 1.90}, {bologne: 0.25}, {chicken: 0.85}];

let meat = {};

  // Augment the original object with another method
meat.addMeat = function (index, topping) {
	console.log("Meat?", topping);
	switch(topping){
		case "turkey":
			var thisMeatPrice = meatPrices[index].turkey;
			break;
		case "ham":
			thisMeatPrice = meatPrices[index].ham;
			break;
		case "lamb":
			thisMeatPrice = meatPrices[index].lamb;
			break;
		case "bologne":
			thisMeatPrice = meatPrices[index].bologne;
			break;
		case "chicken":
			thisMeatPrice = meatPrices[index].chicken;
			break;
	}
	
	console.log("thisMeatPrice", thisMeatPrice);
  // console.log("meatPrice", meatPrices[index].value);
  return thisMeatPrice;
};

  // Return the new, augmented object with the new method on it
module.exports = meat;