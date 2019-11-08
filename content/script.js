var tap = 1;


function change1(){
    var content = document.querySelector('#tap-bar');
    var slide = document.querySelector('#slide');
    if(tap){
        content.style.width = "25vw";
        slide.style.right = "23.5%";
        tap = 0;
    }
    else{
        content.style.width = "0vw";
        slide.style.right = "-1.5%";
        tap = 1;
    }
}
