window.onscroll = function() {scorll()};



function myMenu() {
    var x = document.getElementById("menu");
    var h1 = document.getElementById("ham1");
    var h2 = document.getElementById("ham2");
    var h3 = document.getElementById("ham3");
    

    if (x.style.height == "35vw") {
        x.style.height = "0";
        h1.style.transform = "rotate(0)";
        h2.style.opacity = "100";
        h3.style.transform = "rotate(0)";

    }else{
        x.style.height = "35vw";
        h1.style.transform = "rotate(-45deg) translate(-1.8vw, 0.5vw)";
        h2.style.opacity = "0";
        h3.style.transform = "rotate(45deg) translate(-1.8vw, -0.5vw)";
    }
}


function scorll(){
    // line slide
    var x = document.body.scrollTop;
    var dash = document.querySelector("#line-dashed");
    var board = document.querySelector("#board");
    var rect = board.getBoundingClientRect();
    
    if(x>rect.height-screen.availHeight-50){
        dash.style.width = "90%";
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

}