window.onscroll = onScroll;
{onScroll()};
var IS_SCROLLED = false;
var FADING_IN = false;
var FADING_OUT = false;
var THRESHOLD = 15;
function onScroll(){
    nav = document.getElementById("navigation-bar");
    if (document.body.scrollTop >= THRESHOLD && IS_SCROLLED == false && FADING_IN == false){
        FADING_OUT = false;
        FADING_IN = true;
        bgFadeIn(document.getElementById("navigation-bar"));
        IS_SCROLLED = true;
    } else if (document.body.scrollTop < THRESHOLD && IS_SCROLLED == true && FADING_OUT == false){
        FADING_IN = false;
        FADING_OUT = true;
        bgFadeOut(document.getElementById("navigation-bar"));
        IS_SCROLLED = false;
    }
}

//Fix fading condition checks. Make sure setting op doesn't disrupt
function bgFadeIn(element) {
    var bgc = element.style.backgroundColor;
    if (bgc == ""){
        var op = 0.1;
    } else {
        var rgba = bgc.match(/(\d|[.])+/g);
        console.log(rgba)
        var op = Number(rgba[3]);
    }
    var timer = setInterval(function(){
        if (op >= 0.7 || FADING_OUT == true){
            FADING_IN = false;
            clearInterval(timer);
        }
        element.style.backgroundColor = "rgba(0, 0, 0, " + op + ")";
        op += op * 0.1;
    }, 1);
}

function bgFadeOut (element) {
    var bgc = element.style.backgroundColor;
    if (bgc == ""){
        var op = 0.7;
    } else {
        var rgba = bgc.match(/(\d|[.])+/g);
        var op = Number(rgba[3]);
    }
    var timer = setInterval(function(){
        if (op <= 0.1 || FADING_IN == true){
            FADING_OUT = false;
            clearInterval(timer);
        }
        element.style.backgroundColor = "rgba(0, 0, 0, " + op + ")";
        op -= op * 0.1;
    }, 1);
}