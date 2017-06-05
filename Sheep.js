//TAMA
var pet = {
	type:"blob",
	age:0,
	fullness:100,
	alive:"true"
}

function startGame() {
	$("#start").hide();
	hungry = setInterval(updateHunger, 500); //twice per second
	old = setInterval(updateAge, 1000); //once per second
	console.log(window.innerWidth);
}

function updateHunger() {
	pet.fullness-=1;
	document.getElementById("fullness_meter").style.width = pet.fullness*2 + "px";
	if (pet.fullness<=0) {
		clearInterval(hungry);
		clearInterval(old);
		if (pet.alive=="true") {
			document.getElementById("pet").src = "blob/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [starvation]";
	}
}

function feed() {
	if (pet.fullness>95) {
		clearInterval(hungry);
		clearInterval(old);
		if (pet.alive=="true") {
			document.getElementById("pet").src = "blob/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [overfed]";
	} else {
		 document.getElementById("pet").src = "blob/feed.gif";
		 if (pet.fullness>80) {
			 pet.fullness = 100;
		 } else {
			 pet.fullness+=20;
		 }
		 setTimeout(idle, 1000);
	}
}

function updateAge() {
	pet.age+=1;
	document.getElementById("age").innerHTML = "age: " + pet.age;
	if (pet.age==100) {
		clearInterval(old);
		clearInterval(hungry);
		if (pet.alive=="true") {
			document.getElementById("pet").src = "blob/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [old age]";
	}
}

function template(num) {
	document.getElementById("tama").src = "tama/tamagotchi" + num + ".png";
}

function pettype(type) {
	pet.type = type;
	if (pet.alive=="false") {
		document.getElementById("pet").src = pet.type + "/dead.png";
	} else {
		document.getElementById("pet").src = pet.type + "/idle.gif";
	}
}

function idle() {
	if (pet.alive=="true") {
		document.getElementById("pet").src = "blob/idle.gif";
	} else {
		document.getElementById("pet").src = "blob/dead.png";
	}
}