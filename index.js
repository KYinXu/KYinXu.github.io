window.onscroll = onScroll;
{onScroll()};
var IS_SCROLLED = false;
var FADING_IN = false;
var FADING_OUT = false;
function onScroll(){
    nav = document.getElementById("navigation-bar");
    if (document.body.scrollTop >= 15 && IS_SCROLLED == false && FADING_IN == false){
        FADING_OUT = false;
        FADING_IN = true;
        bgFadeIn(document.getElementById("navigation-bar"));
        IS_SCROLLED = true;
    } else if (document.body.scrollTop < 15 && IS_SCROLLED == true && FADING_OUT == false){
        FADING_IN = false;
        FADING_OUT = true;
        bgFadeOut(document.getElementById("navigation-bar"));
        IS_SCROLLED = false;
    }
}

function bgFadeIn(element) {
    var op = 0.1;
    var timer = setInterval(function(){
        if (op >= 0.7 || FADING_OUT == true){
            FADING_IN = false;
            clearInterval(timer);
        }
        element.style.backgroundColor = "rgba(0, 0, 0, " + op + ")";
        op += op * 0.1;
    }, 7);
}

function bgFadeOut (element) {
    var op = 0.7;
    var timer = setInterval(function(){
        if (op <= 0.1 && FADING_IN == true){
            FADING_OUT = false;
            clearInterval(timer);
        }
        element.style.backgroundColor = "rgba(0, 0, 0, " + op + ")";
        op -= op * 0.1;
    }, 7);
}