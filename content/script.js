var tap = 1;


function change1(){
    var content = document.querySelector('.tap-bar');
    var slide = document.querySelector('.slide');
    if(tap){
        content.setAttribute("id", "bar-slide");
        slide.setAttribute("id", "slide");
        tap = 0;
    }
    else{
        slide.removeAttribute("id");
        content.removeAttribute("id");
        tap = 1;
    }
}
