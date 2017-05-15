function MoveLeft() {
    var element = document.getElementById("agnes");
    element.style.left = parseInt(element.style.left) - 15 + 'px';
}

function MoveRight() {
    var element = document.getElementById("agnes");
    element.style.left = parseInt(element.style.left) + 15 + 'px';
}

// function upArrowPressed() {
//     var element = document.getElementById("image1");
//     element.style.top = parseInt(element.style.top) - 15 + 'px';
// }// damn I wish we got the collision detection to work :(

function downArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) + 15 + 'px';
}

function jump() {
    console.log("jump");
  var x = 0;
  var interval = setInterval(function() {
      x++;
      $('#image1').css('top', 410 - (-0.2 * x * (x - 50)));
      if(x >= 50) clearInterval(interval);
  }, 20);
};

function moveSelection(event) {   
    console.log(event.keyCode);                  
    switch (event.keyCode) {
        case 37:
            leftArrowPressed();
            break;

        case 39:
            rightArrowPressed();
            break;

        case 38:
            jump();
            break;

        case 40:
            downArrowPressed();
            break;
    }
};

function gameLoop() {
    // change position based on speed
    //moveSelection();
    setTimeout("gameLoop()",10);
}