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
if (document.hasFocus()) {
	pet.fullness-=1;
	console.log(pet.fullness);
	document.getElementById("fullness_meter").style.width = pet.fullness*2 + "px";
	if (pet.fullness < 40) {
		$("#fullness_meter").css("background-color", "#e20431");
		console.log("bar should be red, this block has run");
	} else {
		$("#fullness_meter").css("background-color", "white");
	}
	if (pet.fullness<=0) {
		$("#fun_meter").css("background-color", "grey");
		clearInterval(hungry);
		clearInterval(old);
		clearInterval(fun);
		if (pet.alive=="true") {
			document.getElementById("pet").src = pet.type + "/death.gif";
			pet.alive="false";
		}
		document.getElementById("status").innerHTML = "status: DEAD [starvation]";
		console.log("pet dead! pet.fullness=0");
	}
}
}

function feed() {
	if (pet.fullness>95) {
		$("#fullness_meter").css("background-color", "grey");
		$("#fun_meter").css("background-color", "grey");
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
if (document.hasFocus()) {
	pet.age+=1;
	document.getElementById("age").innerHTML = "age: " + pet.age;
	if (pet.age==100) {
		$("#fullness_meter").css("background-color", "grey");
		$("#fun_meter").css("background-color", "grey");
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
}

function updateFun() {
if (document.hasFocus()) {
	pet.fun-=1;
	document.getElementById("fun_meter").style.width = pet.fun*2 + "px";
	if (pet.fun < 40) {
		$("#fun_meter").css("background-color", "#e20431");
	} else {
		$("#fun_meter").css("background-color", "white");
	}
	if (pet.fun <= 0) {
		$("#fullness_meter").css("background-color", "grey");
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

function jump() {
	if (pet.alive == "true") {
		console.log('jump');
		var x = 0;

	var interval = setInterval(function() {
		x++;
		$('#pet').css('top', 300 - (-0.1 * x * (x - 60)));

		if(x >= 60) clearInterval(interval);
		}, 20);
	}
}
