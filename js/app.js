window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.top = "-27px";
    document.getElementById("navbar").style.bottom = "256px";
    document.getElementById("navbar").style.padding = "1em";
  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.bottom = "230px";
    document.getElementById("navbar").style.padding = "0em";
  }
}