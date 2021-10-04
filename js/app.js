window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.top = "-27px";
    document.getElementById("navbar").style.bottom = "560px";
    document.getElementById("navbar").style.padding = "1em";
    document.getElementById("navbar").style.paddingLeft = "0em";
    document.getElementById("navbar").style.boxShadow = "0em";
  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.bottom = "533px";
    document.getElementById("navbar").style.padding = "0em";
    document.getElementById("navbar").style.paddingLeft = "0em";
  }
}

//====================================================================//

function myFunction(x) {
    x.classList.toggle("change");
}

//====================================================================//

var menu_aberto_aberto = 0;

$("#menu-responsivo").on("click", function(e){

	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$("#row-responsivo").show(2500);
  $('#row-responsivo').animate({left: '70px'});
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$("#row-responsivo").hide(2500);
	menu_aberto_aberto = 0;
}

//====================================================================//

$(document).ready(function(){

  $(".counter").each(function() {
    var $this = $(this),

        countTo = $this.attr("data-count");

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
      duration: 3000,
      easing:"linear",
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });
});

//====================================================================//

$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll > 200){
    $("#text-animation").fadeIn(1000);

    $("#text-animation").animate({left: "30px"}, function(){
      $("#text-div-animation").fadeIn(1000);
    });
  }
});

//====================================================================//

$("#botao-basics").on("click", function(e){

  $("#botao-basics").css("border", "2px solid #2a81ea");
  $("#botao-basics").css("color", "#2a81ea");
  $("#botao-spreads").css("border", "");
  $("#botao-spreads").css("color", "");
  $("#botao-protect").css("border", "");
  $("#botao-protect").css("color", "");
  $("#botao-symptoms").css("border", "");
  $("#botao-symptoms").css("color", "");
  $("#botao-outbreak").css("border", "");
  $("#botao-outbreak").css("color", "");
  $("#botao-myth").css("border", "");
  $("#botao-myth").css("color", "");
  $("#resultado").html(basics_01);

});

//====================================================================//
  
$("#botao-spreads").on("click", function(e){

  $("#botao-spreads").css("border", "2px solid #2a81ea");
  $("#botao-spreads").css("color", "#2a81ea");
  $("#botao-basics").css("border", "");
  $("#botao-basics").css("color", "");
  $("#botao-protect").css("border", "");
  $("#botao-protect").css("color", "");
  $("#botao-symptoms").css("border", "");
  $("#botao-symptoms").css("color", "");
  $("#botao-outbreak").css("border", "");
  $("#botao-outbreak").css("color", "");
  $("#botao-myth").css("border", "");
  $("#botao-myth").css("color", "");
  $("#resultado").html(basics_02);

});

//====================================================================//
  
$("#botao-protect").on("click", function(e){

  $("#botao-protect").css("border", "2px solid #2a81ea");
  $("#botao-protect").css("color", "#2a81ea");
  $("#botao-basics").css("border", "");
  $("#botao-basics").css("color", "");
  $("#botao-spreads").css("border", "");
  $("#botao-spreads").css("color", "");
  $("#botao-symptoms").css("border", "");
  $("#botao-symptoms").css("color", "");
  $("#botao-outbreak").css("border", "");
  $("#botao-outbreak").css("color", "");
  $("#botao-myth").css("border", "");
  $("#botao-myth").css("color", "");
  $("#resultado").html(basics_03);

});

//====================================================================//
  
$("#botao-symptoms").on("click", function(e){

  $("#botao-symptoms").css("border", "2px solid #2a81ea");
  $("#botao-symptoms").css("color", "#2a81ea");
  $("#botao-basics").css("border", "");
  $("#botao-basics").css("color", "");
  $("#botao-spreads").css("border", "");
  $("#botao-spreads").css("color", "");
  $("#botao-protect").css("border", "");
  $("#botao-protect").css("color", "");
  $("#botao-outbreak").css("border", "");
  $("#botao-outbreak").css("color", "");
  $("#botao-myth").css("border", "");
  $("#botao-myth").css("color", "");
  $("#resultado").html(basics_04);

});

//====================================================================//
  
$("#botao-outbreak").on("click", function(e){

  $("#botao-outbreak").css("border", "2px solid #2a81ea");
  $("#botao-outbreak").css("color", "#2a81ea");
  $("#botao-basics").css("border", "");
  $("#botao-basics").css("color", "");
  $("#botao-spreads").css("border", "");
  $("#botao-spreads").css("color", "");
  $("#botao-protect").css("border", "");
  $("#botao-protect").css("color", "");
  $("#botao-symptoms").css("border", "");
  $("#botao-symptoms").css("color", "");
  $("#botao-myth").css("border", "");
  $("#botao-myth").css("color", "");
  $("#resultado").html(basics_05);

});

//====================================================================//
  
$("#botao-myth").on("click", function(e){

  $("#botao-myth").css("border", "2px solid #2a81ea");
  $("#botao-myth").css("color", "#2a81ea");
  $("#botao-basics").css("border", "");
  $("#botao-basics").css("color", "");
  $("#botao-spreads").css("border", "");
  $("#botao-spreads").css("color", "");
  $("#botao-protect").css("border", "");
  $("#botao-protect").css("color", "");
  $("#botao-symptoms").css("border", "");
  $("#botao-symptoms").css("color", "");
  $("#botao-outbreak").css("border", "");
  $("#botao-outbreak").css("color", "");
  $("#resultado").html(basics_06);

});

//====================================================================//

$("#imagem_animation_01").on("mouseover", function(e) {
  $("#texto_animation_02").removeClass("d-none");
});

$("#imagem_animation_01").on("mouseleave", function(e) {
  $("#texto_animation_02").addClass("d-none");
});

//====================================================================//

$("#div-boder").on("mouseover", function(e) {
  $("#div-boder").css("border", "3px solid #2a81ea");
  $("#div-boder").css("transition", "all .4s");
  $("#div-boder").css("border-radius", "5px");
  $("#imagem-animada").css("max-width", "100%");
  $("#imagem-animada").css("-moz-transition", "all 0.3s");
  $("#imagem-animada").css("-webkit-transition", "all 0.3s");
  $("#imagem-animada").css("transition", "all 0.3s");
  $("#imagem-animada").css("-moz-transform", "scale(1.1)");
  $("#imagem-animada").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.2)");
});

$("#div-boder").on("mouseleave", function(e) {
  $("#div-boder").css("border", "3px solid transparent");
  $("#imagem-animada").css("-moz-transform", "");
  $("#imagem-animada").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
});

//====================================================================//

$("#div-boder-02").on("mouseover", function(e) {
  $("#div-boder-02").css("border", "3px solid #2a81ea");
  $("#div-boder-02").css("border-radius", "5px");
  $("#div-boder-02").css("transition", "all .4s");
  $("#imagem-animada-02").css("max-width", "100%");
  $("#imagem-animada-02").css("-moz-transition", "all 0.3s");
  $("#imagem-animada-02").css("-webkit-transition", "all 0.3s");
  $("#imagem-animada-02").css("transition", "all 0.3s");
  $("#imagem-animada-02").css("-moz-transform", "scale(1.1)");
  $("#imagem-animada-02").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.2)");
});

$("#div-boder-02").on("mouseleave", function(e) {
  $("#div-boder-02").css("border", "3px solid transparent");
  $("#imagem-animada-02").css("-moz-transform", "");
  $("#imagem-animada-02").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
});

//====================================================================//

$("#div-boder-03").on("mouseover", function(e) {
  $("#div-boder-03").css("border", "3px solid #2a81ea");
  $("#div-boder-03").css("border-radius", "5px");
  $("#div-boder-03").css("transition", "all .4s");
  $("#imagem-animada-03").css("max-width", "100%");
  $("#imagem-animada-03").css("-moz-transition", "all 0.3s");
  $("#imagem-animada-03").css("-webkit-transition", "all 0.3s");
  $("#imagem-animada-03").css("transition", "all 0.3s");
  $("#imagem-animada-03").css("-moz-transform", "scale(1.1)");
  $("#imagem-animada-03").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.2)");
});

$("#div-boder-03").on("mouseleave", function(e) {
  $("#div-boder-03").css("border", "3px solid transparent");
  $("#imagem-animada-03").css("-moz-transform", "");
  $("#imagem-animada-03").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
});

//====================================================================//

$("#img-animada-01").on("mouseover", function(e) {
  $("#img-animada-01").css("max-width", "100%");
  $("#img-animada-01").css("-moz-transition", "all 0.3s");
  $("#img-animada-01").css("-webkit-transition", "all 0.3s");
  $("#img-animada-01").css("transition", "all 0.3s");
  $("#img-animada-01").css("-moz-transform", "scale(1.1)");
  $("#img-animada-01").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.5.2.5)");
  $("#text-animation-color").css("color", "#2a81ea");
});

$("#img-animada-01").on("mouseleave", function(e) {
  $("#img-animada-01").css("-moz-transform", "");
  $("#img-animada-01").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
  $("#text-animation-color").css("color", "#3d4b69");
});

//====================================================================//

$("#img-animada-02").on("mouseover", function(e) {
  $("#img-animada-02").css("max-width", "100%");
  $("#img-animada-02").css("-moz-transition", "all 0.3s");
  $("#img-animada-02").css("-webkit-transition", "all 0.3s");
  $("#img-animada-02").css("transition", "all 0.3s");
  $("#img-animada-02").css("-moz-transform", "scale(1.1)");
  $("#img-animada-02").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.5.2.5)");
  $("#text-animation-color-02").css("color", "#2a81ea");
});

$("#img-animada-02").on("mouseleave", function(e) {
  $("#img-animada-02").css("-moz-transform", "");
  $("#img-animada-02").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
  $("#text-animation-color-02").css("color", "#3d4b69");
});

//====================================================================//

$("#img-animada-03").on("mouseover", function(e) {
  $("#img-animada-03").css("max-width", "100%");
  $("#img-animada-03").css("-moz-transition", "all 0.3s");
  $("#img-animada-03").css("-webkit-transition", "all 0.3s");
  $("#img-animada-03").css("transition", "all 0.3s");
  $("#img-animada-03").css("-moz-transform", "scale(1.1)");
  $("#img-animada-03").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.5.2.5)");
  $("#text-animation-color-03").css("color", "#2a81ea");
});

$("#img-animada-03").on("mouseleave", function(e) {
  $("#img-animada-03").css("-moz-transform", "");
  $("#img-animada-03").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
  $("#text-animation-color-03").css("color", "#3d4b69");
});

//====================================================================//

$("#img-animada-04").on("mouseover", function(e) {
  $("#img-animada-04").css("max-width", "100%");
  $("#img-animada-04").css("-moz-transition", "all 0.3s");
  $("#img-animada-04").css("-webkit-transition", "all 0.3s");
  $("#img-animada-04").css("transition", "all 0.3s");
  $("#img-animada-04").css("-moz-transform", "scale(1.1)");
  $("#img-animada-04").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.5.2.5)");
  $("#text-animation-color-04").css("color", "#2a81ea");
});

$("#img-animada-04").on("mouseleave", function(e) {
  $("#img-animada-04").css("-moz-transform", "");
  $("#img-animada-04").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
  $("#text-animation-color-04").css("color", "#3d4b69");
});

//====================================================================//

$("#img-animada-05").on("mouseover", function(e) {
  $("#img-animada-05").css("max-width", "100%");
  $("#img-animada-05").css("-moz-transition", "all 0.3s");
  $("#img-animada-05").css("-webkit-transition", "all 0.3s");
  $("#img-animada-05").css("transition", "all 0.3s");
  $("#img-animada-05").css("-moz-transform", "scale(1.1)");
  $("#img-animada-05").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.5.2.5)");
  $("#text-animation-color-05").css("color", "#2a81ea");
});

$("#img-animada-05").on("mouseleave", function(e) {
  $("#img-animada-05").css("-moz-transform", "");
  $("#img-animada-05").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
  $("#text-animation-color-05").css("color", "#3d4b69");
});

//====================================================================//

$("#img-animada-06").on("mouseover", function(e) {
  $("#img-animada-06").css("max-width", "100%");
  $("#img-animada-06").css("-moz-transition", "all 0.3s");
  $("#img-animada-06").css("-webkit-transition", "all 0.3s");
  $("#img-animada-06").css("transition", "all 0.3s");
  $("#img-animada-06").css("-moz-transform", "scale(1.1)");
  $("#img-animada-06").css("-webkit-transform", "scale(1.1)");
  $("#transform").css("border-radius", "scale(2.5.2.5)");
  $("#text-animation-color-06").css("color", "#2a81ea");
});

$("#img-animada-06").on("mouseleave", function(e) {
  $("#img-animada-06").css("-moz-transform", "");
  $("#img-animada-06").css("-webkit-transform", "");
  $("#transform").css("border-radius", "");
  $("#text-animation-color-06").css("color", "#3d4b69");
});

//====================================================================// 