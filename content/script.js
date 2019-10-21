var tap = 1;
var map = document.querySelector('#map');
var borad = map.getContext("2d");
var map_image = new Image();
map_image.src = "../img/map.png";

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

setInterval(function(){
    map.style.width = screen.availWidth+"px";
    map.style.height = screen.availHeight+"px";
    borad.drawImage(map_image,0,0,1980,1080);

}, 1000);