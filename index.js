window.onscroll = onScroll;
{onScroll()};
function onScroll(){
    nav = document.getElementById("navigation-bar");
    if (document.body.scrollTop >= 15){
        document.getElementById("navigation-bar").style.backgroundColor = "rgba(0, 0, 0, 1)";
        bgFadeIn(document.getElementById("navigation-bar"));
    } else {
        document.getElementById("navigation-bar").style.backgroundColor = "transparent";
    }
    
}

function bgFadeIn(element) {
    var op = 0.1;
    var timer = setInterval(function(){
        if (op >= 1){
            clearInterval(timer);
        }

        //Fix here
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function bgFadeOut(element) {
    var op = 1;
    var timer = setInterval(function(){
        if (op <= 0.0){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}