"use strict";

  // Private variable to store the different meat prices
var condimentPrices = [{mayo: 0.15}, {chipotle: 0.15}, {yellowMustard: 0.20}, {dijonMustard: 0.25}, {horseRadish: 0.20}];

let condiment = {};

  // Augment the original object with another method
condiment.addCondiment = function(index, topping) {
	switch(topping){
		case "mayo":
			var thisCondimentPrice = condimentPrices[index].mayo;
			break;
		case "chipotle sauce":
			thisCondimentPrice = condimentPrices[index].chipotle;
			break;
		case "yellow mustard":
			thisCondimentPrice = condimentPrices[index].yellowMustard;
			break;
		case "dijon mustard":
			thisCondimentPrice = condimentPrices[index].dijonMustard;
			break;
		case "horse radish":
			thisCondimentPrice = condimentPrices[index].horseRadish;
			break;
	}

	return thisCondimentPrice;
};

  // Return the new, augmented object with the new method on it
module.exports = condiment;