//TAMA
var pet = {
	type:"blob",
	age:0,
	fullness:100,
	fun:100,
	alive:"true"
}

function startGame() {
	$("#start").hide();
	hungry = setInterval(updateHunger, 400);
	old = setInterval(updateAge, 1000); //once per second
	fun = setInterval(updateFun, 600);
	console.log(window.innerWidth);
}

function updateHunger() {
	pet.fullness-=1;
	document.getElementById("fullness_meter").style.width = pet.fullness*2 + "px";
	if (pet.fullness<=0) {
		clearInterval(hungry);
		clearInterval(old);
		clearInterval(fun);
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [starvation]";
	}
}

function feed() {
	if (pet.fullness>95) {
		clearInterval(hungry);
		clearInterval(old);
		clearInterval(fun);
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [overfed]";
	} else {
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "/feed.gif";
			if (pet.fullness>80) {
				pet.fullness = 100;
			} else {
				pet.fullness+=20;
			}
			setTimeout(idle, 1000);
		}
	}
}

function updateAge() {
	pet.age+=1;
	document.getElementById("age").innerHTML = "age: " + pet.age;
	if (pet.age==100) {
		clearInterval(old);
		clearInterval(hungry);
		clearInterval(fun);
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [old age]";
	}
}

function updateFun() {
	pet.fun-=1;
	document.getElementById("fun_meter").style.width = pet.fun*2 + "px";
	if (pet.fun<=0) {
		clearInterval(hungry);
		clearInterval(old);
		clearInterval(fun);
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [bored/unhappy]";
	}
}

function petit() {
	if (pet.alive=="true") {
		document.getElementById("pet").src = pet.type + "/pet.gif";
		if (pet.fun>80) {
			 pet.fun = 100;
		 } else {
			 pet.fun+=20;
		 }
		setTimeout(idle, 4000);
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
		document.getElementById("pet").src = pet.type + "/idle.gif";
	} else {
		document.getElementById("pet").src = pet.type + "/dead.png";
	}
}