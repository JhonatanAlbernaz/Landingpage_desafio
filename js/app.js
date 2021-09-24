window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.top = "-27px";
    document.getElementById("navbar").style.bottom = "560px";
    document.getElementById("navbar").style.padding = "1em";
  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.bottom = "533px";
    document.getElementById("navbar").style.padding = "0em";
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