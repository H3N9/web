function myMenu() {
    var x = document.getElementById("menu");
    var h1 = document.getElementById("ham1")
    var h2 = document.getElementById("ham2")
    var h3 = document.getElementById("ham3")
    
    if (x.style.left === "50%") {
        x.style.left = "100%";
        h1.style.transform = "rotate(0)" 
        h2.style.opacity = "100";
        h3.style.transform = "rotate(0)" 

    }else{
        x.style.left = "50%";
        h1.style.transform = "rotate(-45deg) translate(-1vw, 0.5vw)" 
        h2.style.opacity = "0";
        h3.style.transform = "rotate(45deg) translate(-1vw, -0.5vw)" 

    }
  }