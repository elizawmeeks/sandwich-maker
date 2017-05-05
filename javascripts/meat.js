var Sandwich = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = [{turkey: .90}, {ham: .80}, {lamb: 1.90}, {bologne: .25}, {chicken: .85}];

  // Augment the original object with another method
  maker.addMeat = function(index, topping) {
  	console.log("turkey?", meatPrices[0].turkey);
  	console.log("Meat?", topping);
  	switch(topping){
  		case "turkey":
  			var thisMeatPrice = meatPrices[index].turkey;
  			break;
  		case "ham":
  			var thisMeatPrice = meatPrices[index].ham;
  			break;
  		case "lamb":
  			var thisMeatPrice = meatPrices[index].lamb;
  			break;
  		case "bologne":
  			var thisMeatPrice = meatPrices[index].bologne;
  			break;
  		case "chicken":
  			var thisMeatPrice = meatPrices[index].chicken;
  			break;
  	}
  	
  	console.log("thisMeatPrice", thisMeatPrice);
    // console.log("meatPrice", meatPrices[index].value);
    return thisMeatPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(Sandwich || {});