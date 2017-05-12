$(document).ready(function() {
    $('select').material_select();
  });


var price = 0;
var selectedTopping;
var index;

$( "#bread" ).change(function(event) {
    if (event.target.value === "none"){
    	price = 0;
    	console.log("event.target.value", event.target.value);
    	Sandwich.addTopping(price);
    } else {
	    console.log("event", event );
		index = Number(event.target.value);
		selectedTopping = event.target.options[index].innerText.toLowerCase();
		price = Sandwich.addBread(index, selectedTopping);
		console.log("index", index);
		console.log("selectedTopping", selectedTopping);
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
		price = Sandwich.addCheese(index, selectedTopping);
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
		price = Sandwich.addCondiment(index, selectedTopping);
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
		price = Sandwich.addMeat(index, selectedTopping);
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
		price = Sandwich.addProduce(index, selectedTopping);
		console.log("index", index);
		console.log("selectedTopping", selectedTopping);
		console.log("price", price);
		Sandwich.addTopping(price);
	}
});
