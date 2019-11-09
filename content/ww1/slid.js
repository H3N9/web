function inover(x){
  var text = document.getElementsByClassName("time-text")[x];
  text.setAttribute("id", "tapb");
}
function outover(x){
  var text = document.getElementsByClassName("time-text")[x];
  text.removeAttribute("id");
}