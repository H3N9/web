var tap = 1;
var map = document.querySelector('#map');
var borad = map.getContext("2d");
var map_image = new Image();
map_image.src = "../img/map.png";

var width = map.style.width;
var height = map.style.height;

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
    width = screen.availWidth+"px";
    heigt = screen.availHeight+"px";
    borad.drawImage(map_image, 0, 0, width, height);

}, 1000);