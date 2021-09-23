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
	$('#row-responsivo').show(1000);
	$('#menu-responsivo').addClass('menu-responsivo-ativo');
	menu_aberto_aberto = 1;
    $('#row-responsivo').animate({left: '70px'});
}

function fecharMenu(){
	$('#row-responsivo').hide(500);
	$('#menu-responsivo').removeClass('menu-responsivo-ativo');
	menu_aberto_aberto = 0;
}