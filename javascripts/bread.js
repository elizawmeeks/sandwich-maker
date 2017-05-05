var Sandwich = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = [{white: .10}, {wheat: .15}, {seeded: .20}, {sub: .25}];

  // Augment the original object with another method
  maker.addBread = function(index, topping) {
  	console.log("bread?", topping);
  	switch(topping){
  		case "white":
  			var thisBreadPrice = breadPrices[index].white;
  			break;
  		case "wheat":
  			var thisBreadPrice = breadPrices[index].wheat;
  			break;
  		case "seeded":
  			var thisBreadPrice = breadPrices[index].seeded;
  			break;
  		case "sub":
  			var thisBreadPrice = breadPrices[index].sub;
  			break;
  	}

  	return thisBreadPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(Sandwich || {});