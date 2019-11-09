function myMenu() {
    var x = document.getElementById("menu");
    var h1 = document.getElementById("ham1");
    var h2 = document.getElementById("ham2");
    var h3 = document.getElementById("ham3");
    

    if (x.style.width == "35vw") {
        x.style.width = "0vw";
        h1.style.transform = "rotate(0)";
        h2.style.opacity = "100";
        h3.style.transform = "rotate(0)";

    }else{
        x.style.width = "35vw";
        h1.style.transform = "rotate(-45deg) translate(-1.8vw, 0.5vw)";
        h2.style.opacity = "0";
        h3.style.transform = "rotate(45deg) translate(-1.8vw, -0.5vw)";
    }
}
setInterval(function loop(){
    if(screen.availWidth>1500){
        window.onscroll = function() {scroll();}
    }
    else
        scroll();
},100);



function scroll(){
    // line slide
    
    var dash = document.querySelector("#line-dashed");
    var board = document.querySelector("#board");
    var x = document.body.scrollTop;
    var rect = board.getBoundingClientRect();

    
    if(x>rect.height-screen.availHeight-50){
        dash.style.width = "90vw";
    }else{
        dash.style.width = "0";
    }

    //show rush
    var rush = document.querySelector("#rush");
    var bg1 = document.querySelector("#bg1");
    var rect1 = bg1.getBoundingClientRect();
    if(x>rect1.height){
        rush.style.display = "block";
    }
    else{
        rush.style.display = "none";
    }

    //show row
    var row = document.getElementsByClassName("row");
    var rect3 = document.getElementById('content').getBoundingClientRect();
    var rect4 = document.getElementById('bind').getBoundingClientRect();
    var rect5 = document.getElementsByClassName("row")[0].getBoundingClientRect();
    var all = rect3.height+rect1.height+rect4.height;
    if(x>all-screen.availHeight){
        row[0].style.opacity = "1";
    }
    if(x>(all+rect5.height+rect4.height)-screen.availHeight){
        row[1].style.opacity = "1";
    }
}
window.addEventListener("load", function (){
    var loader = document.querySelector('.loader');
    loader.style.height = "0";
});