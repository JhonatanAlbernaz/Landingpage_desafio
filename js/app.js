window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "-27px";
    document.getElementById("navbar").style.bottom = "254px";
    document.getElementById("navbar").style.padding = "1em";
  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.bottom = "30px";
    document.getElementById("navbar").style.padding = "0em";
  }
}