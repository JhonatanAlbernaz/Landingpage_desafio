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

function myFunction(x) {
    x.classList.toggle("change");
}

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


$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll > 200){
    $("#text-animation").fadeIn(1000);

    $("#text-animation").animate({left: "30px"}, function(){
      $("#text-div-animation").fadeIn(1000);
    });
  }
});

$("#botao-basics").on("click", function(e){

    $("#resultado").html(basics_01);

});
  
$("#botao-spreads").on("click", function(e){

  $("#resultado").html(basics_02);

});
  
$("#botao-protect").on("click", function(e){

  $("#resultado").html(basics_03);

});
  
$("#botao-symptoms").on("click", function(e){

  $("#resultado").html(basics_04);

});
  
$("#botao-outbreak").on("click", function(e){

  $("#resultado").html(basics_05);

});
  
$("#botao-myth").on("click", function(e){

  $("#resultado").html(basics_06);

}); 

$("#teste_01").on("mouseover", function(e) {
  $("#teste_02").removeClass("d-none");
});

$("#teste_01").on("mouseleave", function(e) {
  $("#teste_02").addClass("d-none");
});