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

$('#menu-responsivo').on('click', function(e){

	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$("#row-responsivo").show(2500);
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$("#row-responsivo").hide(2500);
	menu_aberto_aberto = 0;
}

$(document).ready(function(){

  $('.counter').each(function() {
    var $this = $(this),

        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
      duration: 3000,
      easing:'linear',
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

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}