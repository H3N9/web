var tap = 1;
function change1(){
    var content = document.querySelector('#tap-bar');
    var slide = document.querySelector('#slide');
    if(tap){
        content.style.width = "20vw";
        slide.style.right = "18.5%";
        tap = 0;
    }
    else{
        content.style.width = "0vw";
        slide.style.right = "-1.5%";
        tap = 1;
    }
}