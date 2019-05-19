


var fighter = ["vitiate", "vader", "yoda", "luke"];
var player = "";
var win=0;
var opponent="";
var pick = 0;
var selector = "";
index = 0;
var laser = document.createElement("audio");
  var song = document.createElement("audio");
  var hover = document.createElement("audio");
  var fire = document.createElement("audio");
  fire.setAttribute("src","assets/sound/fire.mp3");

  var vitiate={
    name:"vitiate",
    health:200,
    power:20,
    defence:5,
    attack:function(ennemy){
      ennemy.health -= this.power;
    },
    attackBack:function(ennemy){
      this.health -= ennemy.defence;
    }

    }

    
    var vader={
      name:"vader",
      health:250,
      power:30,
      defence:5,
      attack:function(ennemy){
        ennemy.health -= this.power;
      },
      attackBack:function(ennemy){
        this.health -= ennemy.defence;
      }
  
      }
      var yoda={
        name:"yoda",
        health:100,
        power:10,
        defence:5,
        attack:function(ennemy){
          ennemy.health -= this.power;
        },
        attackBack:function(ennemy){
          this.health -= ennemy.defence;
        }
    
        }
        var luke={
          name:"luke",
          health:200,
          power:10,
          defence:5,
          attack:function(ennemy){
            ennemy.health -= this.power;
          },
          attackBack:function(ennemy){
            this.health -= ennemy.defence;
          }
      
          }



 
  $("#vitiate").hover(function () {
    hover.play();
    
    
    $("#wall").css("background-image", "url(assets/images/vitiatew.jpg");
    

  }, function () {
    
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });


  $("#vader").hover(function () {
    hover.play();
    
    
    $("#wall").css("background-image", "url(assets/images/vaderw.jpg");
    

  }, function () {
    
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });

  $("#yoda").hover(function () {
    hover.play();
    
    
    $("#wall").css("background-image", "url(assets/images/yodaw.jpg");
    

  }, function () {
    
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });

  $("#luke").hover(function () {
    hover.play();
    
    
    $("#wall").css("background-image", "url(assets/images/lukew.jpg");
    

  }, function () {
    
    $("#wall").css("background-image", "url(assets/images/star2.jpg");

  });

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





}


function pickPlayer() {
  
  

  
  $(".car1").on("click", function () {
    if(pick==0){
      
    laser.play();
    player=$(this).attr("id");
    $("#" + player).off("click");
    
    $(this).attr("class","mb-3 carp");
    console.log(player);
    positionPlayer();
    }
    else {
      laser.play();
      opponent=$(this).attr("id");
      
    $("#"+opponent).attr("class","mb-3 care");
      
    console.log(opponent);
    console.log(opponent.health);
    positionEnnemy();
    }
  });
  }
 










function positionPlayer() {
  pick++;
  var char="";
  
  console.log(player);
 


  fighter.splice(fighter.indexOf(player), 1);
  console.log(fighter);

    
    





  $("#blink2").html("Pick your Ennemy");
  $("#blink2").css("color", "red");
  $("#" + player).css("position", "fixed");
  $("#" + player).animate({
    left: "800px", top: "48px"

  }, "normal");
  
 pickPlayer();

}


function positionEnnemy(){
  $("#blink2").css("visibility","hidden")
  fighter.splice(fighter.indexOf(opponent), 1);
  $("#" + opponent).css("position", "fixed");
  $("#" + opponent).animate({
    left: "160px", top: "48px"

  }, "normal");
  for(i=0;i<fighter.length;i++){
    $("#" + fighter[i]).off("click");

  }
  if(fighter.length==2)
  {
  $("#" + fighter[0]).css("position", "fixed");
  $("#" + fighter[0]).animate({
    left: "300px", top: "500px"

  }, "normal");
  $("#" + fighter[1]).css("position", "fixed");
  $("#" + fighter[1]).animate({
    left: "700px", top: "500px"

  }, "normal");
}


  fight();
}


function fight(){
  $(".carp").on("click", function () {
          fire.play();
          eval(player).attack(eval(opponent));
          eval(player).attackBack(eval(opponent));
           var playerHealth = $("#"+player+"H");
           var opponentHealth = $("#"+opponent+"H");

          
           playerHealth.html("<br>"+eval(player).health);
           opponentHealth.html("<br>"+eval(opponent).health);
           
           
           if(eval(player).health<=0){
            $("#loss").css("visibility", "visible");
            $("#retry").on("click", function () {
              window.location.reload();
            });
           }
           
           

           if(eval(opponent).health<=0)
           {
            win++;
            $("#"+opponent).css("visibility","hidden");
            $("#" + player).off("click");
            pickPlayer();
           }
           if(win==4){
           
            $("#vict").css("visibility", "visible");
            $("#again").on("click", function () {
              window.location.reload();
            });
             
           }

  });
}
 




















function blink() {

  $("#blink").fadeOut();
  $("#blink").fadeIn();
  $("#blink2").fadeOut();
  $("#blink2").fadeIn();

}

