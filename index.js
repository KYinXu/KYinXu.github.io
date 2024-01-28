window.onscroll = onScroll;
{onScroll()};
var THRESHOLD = 15;
function onScroll(){
    nav = document.getElementById("navigation-bar");
    if (document.body.scrollTop >= THRESHOLD){
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else if (document.body.scrollTop < THRESHOLD){
        nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
