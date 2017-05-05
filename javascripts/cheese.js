var Sandwich = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = [{cheddar: .20}, {swiss: .20}, {meunster: .30}, {havarti: .25}, {pepperjack: .25}];

  // Augment the original object with another method
  maker.addCheese = function(index, topping) {
  	switch(topping){
  		case "cheddar":
  			var thisCheesePrice = cheesePrices[index].cheddar;
  			break;
  		case "swiss":
  			var thisCheesePrice = cheesePrices[index].swiss;
  			break;
  		case "meunster":
  			var thisCheesePrice = cheesePrices[index].meunster;
  			break;
  		case "havarti":
  			var thisCheesePrice = cheesePrices[index].havarti;
  			break;
  		case "pepperjack":
  			var thisCheesePrice = cheesePrices[index].pepperjack;
  			break;
  	}

  	return thisCheesePrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(Sandwich || {});