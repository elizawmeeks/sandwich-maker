"use strict";

  // Private variable to store the different meat prices
var producePrices = [{lettuce: 0.15}, {tomato: 0.15}, {apple: 0.20}, {avocado: 0.25}, {peppers: 0.20}, {onion: 0.10}];

let produce = {};

  // Augment the original object with another method
produce.addProduce = function(index, topping) {
	switch(topping){
		case "lettuce":
			var thisProducePrice = producePrices[index].lettuce;
			break;
		case "tomato":
			thisProducePrice = producePrices[index].tomato;
			break;
		case "apple":
			thisProducePrice = producePrices[index].apple;
			break;
		case "avocado":
			thisProducePrice = producePrices[index].avocado;
			break;
		case "bell pepper":
			thisProducePrice = producePrices[index].peppers;
			break;
		case "onion":
			thisProducePrice = producePrices[index].onion;
			break;
	}

	return thisProducePrice;
};

  // Return the new, augmented object with the new method on it
module.exports = produce;