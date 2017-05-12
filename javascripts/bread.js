"use strict";

  // Private variable to store the different meat prices
var breadPrices = [{white: 0.10}, {wheat: 0.15}, {seeded: 0.20}, {sub: 0.25}];

let bread = {};

  // Augment the original object with another method
bread.addBread = function (index, topping) {
	console.log("bread?", topping);
	switch(topping){
		case "white":
			var thisBreadPrice = breadPrices[index].white;
			break;
		case "wheat":
			thisBreadPrice = breadPrices[index].wheat;
			break;
		case "seeded":
			thisBreadPrice = breadPrices[index].seeded;
			break;
		case "sub":
			thisBreadPrice = breadPrices[index].sub;
			break;
	}

	return thisBreadPrice;
};

  // Return the new, augmented object with the new method on it
module.exports = bread;