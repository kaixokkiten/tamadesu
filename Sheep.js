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
	type:"hamtaro",
	age:0,
	fullness:100,
	alive:"true"
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
		pet.alive="false";
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
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "_death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [overfed]";
	} else if (pet.fullness>80) {
		//feeding animation
		 document.getElementById("pet").src = pet.type + "_feed.gif";
		pet.fullness = 100;
		 setTimeout(idle, 1000);
	} else {
		//feeding animation
		 document.getElementById("pet").src = pet.type + "_feed.gif";
		pet.fullness+=20;
		 x = setTimeout(idle, 1000);
	}
}

function updateAge() {
	pet.age+=1;
	document.getElementById("age").innerHTML = "age: " + pet.age;
	if (pet.age==100) {
		clearInterval(old);
		clearInterval(hungry);
		//death animation
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "_death.gif";
			pet.alive="false";
		}
		//alert("Your pet has died of old age.");
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

function pettype(type) {
	pet.type = type;
	if (pet.alive=="false") {
		document.getElementById("pet").src = pet.type + "_dead.png";
	} else {
		document.getElementById("pet").src = pet.type + ".gif";
	}
}

function idle() {
	if (pet.alive=="true") {
		document.getElementById("pet").src = pet.type + ".gif";
	} else {
		document.getElementById("pet").src = pet.type + "_dead.png";
	}
}