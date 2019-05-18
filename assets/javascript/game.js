
var fighter = ["vitiate", "vader", "yoda", "luke"];
var player = "";
var opponent = "";
var pick = 0;
var selector = "";
index = 0;
var laser = document.createElement("audio");
  var song = document.createElement("audio");
  var hover = document.createElement("audio");
setInterval(blink, 1200);
$("#blink").on("click", changeWall);

function changeWall() {
  $("#blink").remove();
  $("#wall").css("background-image", "url(assets/images/star2.jpg");

  gamescreen();

}


function gamescreen() {
  setTimeout(function () { $("#inst").css("visibility", "visible"); }, 1000);
  $("#go").on("click", function () {
    setTimeout(function () { $("#blink2").css("visibility", "visible"); }, 500);
    $("#inst").css("visibility", "hidden");
    pickPlayer();
  });
  $(".car").css("visibility", "visible");
  
  hover.setAttribute("src", "assets/sound/hover.wav");
  laser.setAttribute("src", "assets/sound/laser.mp3");
  laser.play();
  
  


  song.setAttribute("src", "assets/sound/starmain.mp3");

  song.play();
  hover.play();




  $("#vitiate").hover(function () {
    hover.play();
    $("#vitiate").css("background-color", "springgreen");
    $('#vitiate').css("color", "blue");
    $("#wall").css("background-image", "url(assets/images/vitiatew.jpg");
    $('#vitiate').css("cursor", "pointer");

  }, function () {
    $("#vitiate").css("background-color", "lightgray");
    $('#vitiate').css("color", "black");
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });
  $("#vader").hover(function () {
    hover.play();
    $("#vader").css("background-color", "springgreen");
    $('#vader ').css("color", "blue");
    $("#wall").css("background-image", "url(assets/images/vaderw.jpg");
    $('#vader').css("cursor", "pointer");

  }, function () {
    $("#vader").css("background-color", "lightgray");
    $('#vader').css("color", "black");
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });
  $("#yoda").hover(function () {
    hover.play();
    $("#yoda").css("background-color", "springgreen");
    $('#yoda').css("color", "blue");
    $("#wall").css("background-image", "url(assets/images/yodaw.jpg");
    $('#yoda').css("cursor", "pointer");

  }, function () {
    
    $("#yoda").css("background-color", "lightgray");
    $('#yoda').css("color", "black");
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });

  $("#luke").hover(function () {
    hover.play();
    $("#luke").css("background-color", "springgreen");
    $('#luke').css("color", "blue");
    $("#wall").css("background-image", "url(assets/images/lukew.jpg");
    $('#luke').css("cursor", "pointer");

  }, function () {
    $("#luke").css("background-color", "lightgray");
    $('#luke').css("color", "black");
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });

}


function pickPlayer() {
  for (i = 0; i < fighter.length; i++) {
    $("#" + fighter[i]).on("click", function () {

      laser.play();
      if (pick == 0) {
        player = $(this).attr("id");
        console.log(player);
        positionPlayer();
      }
      if(pick>0){
        player = $(this).attr("id");
        positionEnnemy();
      }
    });
  }
}









function positionPlayer() {
  var char="";
  pick++;
  console.log(player);
  $("#" + player).hover("", function () {
    $("#" + player).css("background-color", "springgreen");
  });


  fighter.splice(fighter.indexOf(player), 1);
  console.log(fighter);
    $("#" + fighter[0]).css("background-color", "red");
    $("#" + fighter[0]).hover(function (){
      $("#" + fighter[0]).css("background-color", "red");
     
    },function() {
     
      $("#" + fighter[0]).css("background-color", "red");
    });

    $("#" + fighter[1]).css("background-color", "red")
    $("#" + fighter[1]).hover(function(){
      $("#" + fighter[1]).css("background-color", "red")
      
    },function () {
      
    $("#" + fighter[1]).css("background-color", "red");
  });
  $("#" + fighter[2]).css("background-color", "red");
  $("#" + fighter[2]).hover(function(){
    
    $("#" + fighter[2]).css("background-color", "red");
  },function () {
    
  $("#" + fighter[2]).css("background-color", "red");
});

    





  $("#blink2").html("Pick your Ennemy");
  $("#blink2").css("color", "red");
  $("#" + player).css("position", "fixed");
  $("#" + player).animate({
    left: "800px", top: "48px"

  }, "normal");
  pick++;

pickPlayer();
}



























function blink() {

  $("#blink").fadeOut();
  $("#blink").fadeIn();
  $("#blink2").fadeOut();
  $("#blink2").fadeIn();

}