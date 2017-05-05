var Sandwich = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = [{mayo: .15}, {chipotle: .15}, {yellowMustard: .20}, {dijonMustard: .25}, {horseRadish: .20}];

  // Augment the original object with another method
  maker.addCondiment = function(index, topping) {
  	switch(topping){
  		case "mayo":
  			var thisCondimentPrice = condimentPrices[index].mayo;
  			break;
  		case "chipotle sauce":
  			var thisCondimentPrice = condimentPrices[index].chipotle;
  			break;
  		case "yellow mustard":
  			var thisCondimentPrice = condimentPrices[index].yellowMustard;
  			break;
  		case "dijon mustard":
  			var thisCondimentPrice = condimentPrices[index].dijonMustard;
  			break;
  		case "horse radish":
  			var thisCondimentPrice = condimentPrices[index].horseRadish;
  			break;
  	}

  	return thisCondimentPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(Sandwich || {});