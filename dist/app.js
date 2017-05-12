(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

  // Private variable to store the different meat prices
let sandwich = {};
var totalPrice = 0;

  // Augment the original object with another method
sandwich.addTopping = function(toppingPrice) {
  totalPrice += toppingPrice;
  var write = $("#stickItHere");
  console.log("totalPrice", totalPrice);
  write[0].innerHTML = "<h3 class='center-align'>$" + totalPrice.toFixed(2) + "</h3>";
};

  // Return the new, augmented object with the new method on it
module.exports = sandwich;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";

$(document).ready(function() {
    $('select').material_select();
  });

var price = 0;
var selectedTopping;
var index;
let Bread = require("./bread"),
	Cheese = require("./cheese"),
	Condiment = require("./condiments"),
	Meat = require("./meat"),
	Produce = require("./produce"),
	Sandwich = require("./SandwichMaker");

$( "#bread" ).change(function(event) {
	console.log("you clicked bread");
    if (event.target.value === "none"){
    	price = 0;
    	console.log("event.target.value", event.target.value);
    	Sandwich.addTopping(price);
    } else {
	    console.log("event", event );
	    console.log("Bread", Bread);
		index = Number(event.target.value);
		selectedTopping = event.target.options[index].innerText.toLowerCase();
		console.log("index", index);
		console.log("selectedTopping", selectedTopping);
		price = Bread.addBread(index, selectedTopping);
		console.log("price", price);
		Sandwich.addTopping(price);
	}
});

$( "#cheese" ).change(function(event) {
	if (event.target.value === "none"){
		price = 0;
    	console.log("event.target.value", event.target.value);
    	Sandwich.addTopping(price);
    } else {
	    console.log("event", event );
		index = Number(event.target.value);
		selectedTopping = event.target.options[index].innerText.toLowerCase();
		price = Cheese.addCheese(index, selectedTopping);
		console.log("index", index);
		console.log("selectedTopping", selectedTopping);
		console.log("price", price);
		Sandwich.addTopping(price);
	}
});

$( "#condiment" ).change(function(event) {
	if (event.target.value === "none"){
		price = 0;
    	console.log("event.target.value", event.target.value);
    	Sandwich.addTopping(price);
    } else {
	    console.log("event", event );
		index = Number(event.target.value);
		selectedTopping = event.target.options[index].innerText.toLowerCase();
		price = Condiment.addCondiment(index, selectedTopping);
		console.log("index", index);
		console.log("selectedTopping", selectedTopping);
		console.log("price", price);
		Sandwich.addTopping(price);
	}
});

$( "#meat" ).change(function(event) {
    if (event.target.value === "none"){
    	price = 0;
    	console.log("event.target.value", event.target.value);
    	Sandwich.addTopping(price);
    } else {
	    console.log("event", event );
		index = Number(event.target.value);
		selectedTopping = event.target.options[index].innerText.toLowerCase();
		price = Meat.addMeat(index, selectedTopping);
		console.log("index", index);
		console.log("selectedTopping", selectedTopping);
		console.log("price", price);
		Sandwich.addTopping(price);
	}
});

$( "#produce" ).change(function(event) {
	if (event.target.value === "none"){
		price = 0;
    	console.log("event.target.value", event.target.value);
    	Sandwich.addTopping(price);
    } else {
	    console.log("event", event );
		index = Number(event.target.value);
		selectedTopping = event.target.options[index].innerText.toLowerCase();
		price = Produce.addProduce(index, selectedTopping);
		console.log("index", index);
		console.log("selectedTopping", selectedTopping);
		console.log("price", price);
		Sandwich.addTopping(price);
	}
});

},{"./SandwichMaker":1,"./bread":2,"./cheese":3,"./condiments":4,"./meat":6,"./produce":7}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}]},{},[5]);
