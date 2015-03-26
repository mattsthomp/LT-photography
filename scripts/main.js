
function show(x) {
    var y = document.getElementsByClassName("gallerycover");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.opacity = "0";
    }
    document.getElementById(x).style.opacity = "1";
    
}

function tabclass(x) {
    var y = document.getElementsByClassName("long-tab");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].className = "short-tab";
    }
    document.getElementById(x).className = "long-tab";
}

var bgTabArray = ["new", "sen", "fam", "kid"];
var bgImageArray = ["newborns", "seniors", "families", "kids"];

function mobileFade() {
    var z = document.getElementsByClassName("long-tab");
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].className = "short-tab";
    }
    document.getElementById(bgTabArray[0]).className = "long-tab";
    var y = document.getElementsByClassName("gallerycover");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.opacity = "0";
    }
    document.getElementById(bgImageArray[0]).style.opacity = "1";
    bgTabArray.push(bgTabArray.shift());
    bgImageArray.push(bgImageArray.shift());
}

if ( $(window).width() < 500) {     
    setInterval(mobileFade, 3000);
}