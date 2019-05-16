
var fighter=["conor","khabib","tony","dustin"];
setInterval(blink, 1200);
$("#blink").on("click",changeWall);

function changeWall(){
  $("#blink").remove();
  $("#wall").css("background-image", "url(assets/images/octa.jpg");
 
  gamescreen();

}
 

function gamescreen(){
  $(".car").css("visibility", "visible");
  var bruceB= document.createElement("audio");
  var song= document.createElement("audio");
   bruceB.setAttribute("src","assets/sound/time.mp3");
  bruceB.play();
   
   

  
  song.setAttribute("src","assets/sound/song.mp3");
  setTimeout(function () {
    song.play();

}, 3000);


$(".conor").hover(function(){
  $(".conor").css("background-color", "gold");
  $('.conor').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/UFC3.jpg");
  $('.conor').css("cursor", "pointer");

}, function(){
  $(".conor").css("background-color", "lightgray");
  $('.conor ').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/octa.jpg");

});
$(".khabib").hover(function(){
  $(".khabib").css("background-color", "gold");
  $('.khabib ').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/khabib2.jpg");
  $('.khabib').css("cursor", "pointer");

}, function(){
  $(".khabib").css("background-color", "lightgray");
  $('.khabib').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/octa.jpg");

});
$(".tony").hover(function(){
  $(".tony").css("background-color", "gold");
  $('.tony').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/tony3.jpg");
  $('.tony').css("cursor", "pointer");

}, function(){
  $(".tony").css("background-color", "lightgray");
  $('.tony ').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/octa.jpg");

});

$(".dustin").hover(function(){
  $(".dustin").css("background-color", "gold");
  $('.dustin').css("color", "blue");
  $("#wall").css("background-image", "url(assets/images/dustin.jpg");
  $('.dustin').css("cursor", "pointer");

}, function(){
  $(".dustin").css("background-color", "lightgray");
  $('.dustin ').css("color", "black");
  $("#wall").css("background-image", "url(assets/images/octa.jpg");

});

$(".conor").on("click",function(){
  
    $(".conor").animate({
      left: "+=800px"
    }, "normal");
    $(".conor").off("click");
  });
  
  
  $(".khabib").click(function(){
  
    $(".khabib").animate({
      left: "+=800px"
    }, "normal");
    $(".khabib").animate({
      top: "-=162px"
    }, "normal");
    $(".khabib").off("click");
  });

  $(".tony").click(function(){
  
    $(".tony").animate({
      left: "+=800px"
    }, "normal");
    $(".tony").animate({
      top: "-=324px"
    }, "normal");
    $(".tony").off("click");
  });


  $(".dustin").click(function(){
  
    $(".dustin").animate({
      left: "+=800px"
    }, "normal");
    $(".dustin").animate({
      top: "-=486px"
    }, "normal");
    $(".dustin").off("click");
  });




}


function match(){

}




  





















function blink(){
    $("#blink").fadeOut() ;
    $("#blink").fadeIn() ;
    
}