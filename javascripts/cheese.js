"use strict";

  // Private variable to store the different meat prices
var cheesePrices = [{cheddar: 0.20}, {swiss: 0.20}, {meunster: 0.30}, {havarti: 0.25}, {pepperjack: 0.25}];

let cheese = {};

  // Augment the original object with another method
cheese.addCheese = function(index, topping) {
	switch(topping){
		case "cheddar":
			var thisCheesePrice = cheesePrices[index].cheddar;
			break;
		case "swiss":
			thisCheesePrice = cheesePrices[index].swiss;
			break;
		case "meunster":
			thisCheesePrice = cheesePrices[index].meunster;
			break;
		case "havarti":
			thisCheesePrice = cheesePrices[index].havarti;
			break;
		case "pepper jack":
			thisCheesePrice = cheesePrices[index].pepperjack;
			break;
	}
	return thisCheesePrice;
};


  // Return the new, augmented object with the new method on it
module.exports = cheese;