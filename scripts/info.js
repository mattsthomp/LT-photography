
function pricing(x,w) {
    var y = document.getElementsByClassName("selected");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].className = "pricing-button";
    }
    document.getElementById(x).className = "pricing-button selected";
    var z = document.getElementsByClassName("infobox");
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].style.opacity = "0";
    }
    document.getElementById(w).style.opacity = "1";
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});