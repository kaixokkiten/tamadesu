//$(document).ready(function(){
	// alert("click on the button that says \"Click me!!!\"");//annoying
    // $("#click").click(function(){
    //     $("#tama").hide();
    // }); //working, but compiler complains   
//});

function disappear(){
	$("#tama").hide();
	//alert("press the center button on the game console!") //annoying
}

// $("#image").click( function(){
// alert("CLICKED");
// });

function dosomething() {
	alert("I DID SOMETHING");
}

function change() {
	$("#pet").hide();
}

//TAMA
var pet = {
	type:"hamtaro",
	age:0,
	hunger:0,
	getAge: function() {
		return this.age;
	},
	getHunger: function() {
		return this.hunger;
	}
}


function startGame() {
	$("#start").hide();
	hungry = setInterval(updateHunger, 500);
	old = setInterval(updateAge, 1000);
}

function updateHunger() {
	pet.hunger+=1;
	document.getElementById("hunger").innerHTML = "hunger: " + pet.hunger;
	if (pet.hunger>=100) {
		clearInterval(hungry);
		clearInterval(old);
		document.getElementById("status").innerHTML = "status: DEAD [starvation]";
	}
}

function feed() {
	if (pet.hunger<7) {
		clearInterval(hungry);
		clearInterval(old);
		document.getElementById("status").innerHTML = "status: DEAD [overfed]";
	} else if (pet.hunger<25) {
		pet.hunger = 0;
	} else {
		pet.hunger-=20;
	}
}

function updateAge() {
	pet.age+=1;
	document.getElementById("age").innerHTML = "age: " + pet.age;
	if (pet.age==20) {
		clearInterval(old);
		clearInterval(hungry);
		document.getElementById("status").innerHTML = "status: DEAD [old age]";
	}
}