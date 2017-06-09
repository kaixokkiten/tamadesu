//TAMA
var pet = {
	type:"blob",
	alive:"true"
}

function startGame() {
	$("#start").hide();
	
	console.log(window.innerWidth);
}

function jump() {
		console.log('jump');
		var x = 0;

	var interval = setInterval(function() {
		x++;
		$('#pet').css('top', 300 - (-0.1 * x * (x - 60)));

		if(x >= 60) clearInterval(interval);
		}, 20);
	
}
