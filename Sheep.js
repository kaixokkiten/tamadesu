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

function dosomething() {
	alert("I DID SOMETHING");
}

function change() {
	$("#pet").hide();
}

//TAMA
var pet = {
	type:"cat",
	age:0,
	fullness:100
}

function startGame() {
	$("#start").hide();
	hungry = setInterval(updateHunger, 500); //twice per second
	old = setInterval(updateAge, 1000); //once per second
}

function updateHunger() {
	pet.fullness-=1;
	document.getElementById("fullness_meter").style.width = pet.fullness*2 + "px";
	if (pet.fullness<=0) {
		clearInterval(hungry);
		clearInterval(old);
		//death animation
		alert("Your pet has died of starvation.");
		document.getElementById("status").innerHTML = "status: DEAD [starvation]";
	}
}

function feed() {
	if (pet.fullness>95) {
		clearInterval(hungry);
		clearInterval(old);
		//death animation
		alert("Your pet has died of overeating.");
		document.getElementById("status").innerHTML = "status: DEAD [overfed]";
	} else if (pet.fullness>80) {
		//feeding animation
		pet.fullness = 100;
	} else {
		//feeding animation
		pet.fullness+=20;
	}
}

function updateAge() {
	pet.age+=1;
	document.getElementById("age").innerHTML = "age: " + pet.age;
	if (pet.age==100) {
		clearInterval(old);
		clearInterval(hungry);
		//death animation
		alert("Your pet has died of old age.");
		document.getElementById("status").innerHTML = "status: DEAD [old age]";
	}
}

//templates
function template00() {
	document.getElementById("tama").src = "tamagotchi_base.png";
}
function template01() {
	document.getElementById("tama").src = "tamagotchi_base01.png";
}

//pet type
function hamtaro() {
	pet.type = "hamtaro_01";
	if (pet.age==0) {
		document.getElementById("pet").src = pet.type + ".png";
	}
}
function pettype() {
	pet.type = "typehere";
	if (pet.age==0) {
		document.getElementById("pet").src = pet.type + ".png";
	}
}

//animations to have
/*
	young - idle, feed, death by overeating, starvation, dead sprite
	adult - idle, feed, death by overeating, starvation, dead sprite
	elder - idle, feed, death by overeating, starvation, death by old age, dead sprite
	
	maybe two-three options for different pets
*/