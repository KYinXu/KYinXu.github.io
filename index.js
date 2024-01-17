window.onscroll = onScroll;
{onScroll()};
function onScroll(){
    nav = document.getElementById("navigation-bar");
    console.log(nav.style.backgroundColor);
    if (document.body.scrollTop >= 15){
        document.getElementById("navigation-bar").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        document.getElementById("navigation-bar").style.backgroundColor = "transparent";
    }
    
}