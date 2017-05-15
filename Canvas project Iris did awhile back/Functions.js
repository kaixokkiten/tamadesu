
$(document).ready(function() {
  // $("#hi").show();
  // $("#arcade").hide();
  // $("#agnes").show();
  $("#next").hide();
  $("#submit1").hide();
  
});

  var icon;
  var which = 0;
function init() {
    var stage = new createjs.Stage("hi");
    // stage.canvas.width = window.innerWidth;
  var icon = new createjs.Shape();
    // stage.canvas.height = window.innerHeight;
    icon.graphics.beginFill("blue").drawRect(0, 1, 18, 18);
    icon.x = 400;
    icon.y = 110;
    stage.addChild(icon);
    stage.update();

  // var agnesSquare = new createjs.Shape();
  //   // stage.canvas.height = window.innerHeight;
  //   agnesSquare.graphics.beginFill("White").drawRect(0, 1, 18, 18);
  //   agnesSquare.x = 45;
  //   agnesSquare.y = 100;
  //   stage.addChild(agnesSquare);
  //   stage.update();
    // this.document.onkeydown = agnesJump; 
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick(event) {
     //Circle will move 10 units to the right.
        icon.x -= 10;
      //Will cause the circle to wrap back
        if (icon.x < -25) { icon.x = stage.canvas.width; }
        //createjs.Ticker.setFPS(10);
        icon.x += event.delta/2000*100;
        stage.update();
      if (70<icon.x && icon.x<75){
        score+= 1;
        document.getElementById('scoring').innerHTML = "SCORE = " + score;
       if (score>=5){
      $("#next").show();
    }
      }
    }
createjs.Ticker.addEventListener("tick", agnesJump);

    var KEYCODE_LEFT = 37, 
    KEYCODE_RIGHT = 39,
    KEYCODE_UP = 38, 
    KEYCODE_DOWN = 40;

  
  function agnesJump(event) {
    switch(event.keyCode) {
      case KEYCODE_UP: 
      getTime(false);
      console.log(getTime());
      var startTime= getTime();
      console.log(startTime);
      agnesSquare.y-=10;
      if (getTime()>startTime+1000){
        agnesSquare.y+=10;
      }
        break;
      case KEYCODE_DOWN: 
        agnesSquare.y += 5;
        break;
    }
    stage.update();
  }

};

function toggleBack(){
  console.log("hihi");
  if (which === 0){
    $("#hi").css("background-image","url('finalProjDesktop2.PNG')");
    which = 1;
  }
  else if (which ===1){
    $("#hi").css("background-image","url('fsbackground.PNG')");
    which = 0;
  }
  console.log(which);
  $("#hi").toggle();
  $("#arcade").toggle();
  $("#agnes").toggle();
  return which;
};
// ?????
function jump() {
  var x = 0;

  var interval = setInterval(function() {
      x++;
      $('#agnes').css('top', 410 - (-0.2 * x * (x - 50)));
      
      if(x >= 50) clearInterval(interval);
  }, 12);
  //console.log(event.keycode);
};

var score = 0;
//to handle form (check if answer right)
function checkRight(){
    var inputAns = 5;
    // grabbing value from html document
    inputAns = document.getElementById("q2").value;
    if (inputAns == omg*lol){
        // show button if answer is correct
        $("#submit1").show();
    }
    else{
        alert("Try Again");
    }
}
// same as above function but adding instead for first question
function checkRight1(){
    var inputAns = 5;   
    inputAns = document.getElementById("q1").value;
    if (inputAns == omg+lol){
        $("#submit1").show();
    }
    else{
        alert("Try Again");
    }
}