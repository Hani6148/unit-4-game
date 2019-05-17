
var fighter=["vitiate","vader","yoda","luke"];
var player="";
setInterval(blink, 1200);
$("#blink").on("click",changeWall);

function changeWall(){
  $("#blink").remove();
  $("#wall").css("background-image", "url(assets/images/star2.jpg");
 
  gamescreen();

}
 

function gamescreen(){
  $(".car").css("visibility", "visible");
  var laser= document.createElement("audio");
  var song= document.createElement("audio");
   laser.setAttribute("src","assets/sound/laser.mp3");
  laser.play();
   
  setTimeout(function(){$("#blink2").css("visibility", "visible");},1500);
  
  
  song.setAttribute("src","assets/sound/starmain.mp3");
  
    song.play();




$(".vitiate").hover(function(){
  $(".vitiate").css("background-color", "springgreen");
  $('.vitiate').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/vitiatew.jpg");
  $('.vitiate').css("cursor", "pointer");

}, function(){
  $(".vitiate").css("background-color", "lightgray");
  $('.vitiate ').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/star2.jpg");

});
$(".vader").hover(function(){
  $(".vader").css("background-color", "springgreen");
  $('.vader ').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/vaderw.jpg");
  $('.vader').css("cursor", "pointer");

}, function(){
  $(".vader").css("background-color", "lightgray");
  $('.vader').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/star2.jpg");

});
$(".yoda").hover(function(){
  $(".yoda").css("background-color", "springgreen");
  $('.yoda').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/yodaw.jpg");
  $('.yoda').css("cursor", "pointer");

}, function(){
  $(".yoda").css("background-color", "lightgray");
  $('.yoda ').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/star2.jpg");

});

$(".luke").hover(function(){
  $(".luke").css("background-color", "springgreen");
  $('.luke').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/lukew.jpg");
  $('.luke').css("cursor", "pointer");

}, function(){
  $(".luke").css("background-color", "lightgray");
  $('.luke ').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/star2.jpg");

});

$(".vitiate").on("click",function(){
    player="vitiate"
    $(".vitiate").animate({
      left: "+=800px"
    }, "normal");
    $(".vitiate").off("click");
    var removed = fighter.splice(0, 1);
    match();
  });
  
  
  $(".vader").click(function(){
    player="vader"
    $(".vader").css("position","fixed"); 
    $(".vader").animate({
      left: "+=800px"
    }, "normal");
    $(".vader").animate({
      top: "48"
    }, "normal");
    $(".vader").off("click");
    var removed = fighter.splice(1, 1);
    match();
  });

  $(".yoda").click(function(){
    player="yoda"
    $(".yoda").css("position","fixed"); 
  
    $(".yoda").animate({
      left: "800px",top: "48px"

    }, "normal");
    
      
    
    $(".yoda").off("click");
    var removed = fighter.splice(2, 1);
    match();
  });


  $(".luke").click(function(){
    player="luke"
    $(".luke").css("position","fixed"); 
    $(".luke").animate({
      left: "+=800px"
    }, "normal");
    $(".luke").animate({
      top: "48px"
    }, "normal");
    $(".luke").off("click");
    var removed = fighter.splice(3, 1);
    match();
  });




}


function match(){
  $("."+fighter[0]).css("position","fixed"); 
  $("."+fighter[0]).off("click");
  $("."+fighter[0]).animate({
    top: "48px",left:"75px"
  }, "normal");
  $("."+fighter[0]).css("visibility","visible"); 
  if(fighter.length>1){
for(i=1;i<fighter.length;i++){
$("."+fighter[i]).css("visibility","hidden");

}
}


}


  





















function blink(){
    
  $("#blink").fadeOut() ;
    $("#blink").fadeIn() ;
    $("#blink2").fadeOut() ;
    $("#blink2").fadeIn() ;
    
}