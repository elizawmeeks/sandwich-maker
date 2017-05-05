var Sandwich = (function(maker) {

  // Private variable to store the different meat prices
  var producePrices = [{lettuce: .15}, {tomato: .15}, {apple: .20}, {avocado: .25}, {peppers: .20}, {onion: .10}];

  // Augment the original object with another method
  maker.addProduce = function(index, topping) {
  	switch(topping){
  		case "lettuce":
  			var thisProducePrice = producePrices[index].lettuce;
  			break;
  		case "tomato":
  			var thisProducePrice = producePrices[index].tomato;
  			break;
  		case "apple":
  			var thisProducePrice = producePrices[index].apple;
  			break;
  		case "avocado":
  			var thisProducePrice = producePrices[index].avocado;
  			break;
  		case "peppers":
  			var thisProducePrice = producePrices[index].peppers;
  			break;
  		case "onion":
  			var thisProducePrice = producePrices[index].onion;
  			break;
  	}

  	return thisProducePrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(Sandwich || {});