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
