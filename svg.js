var pic = document.getElementById("a");
var clear = document.getElementById("clear");
var circleButton = document.getElementById("circle");

var requestID;
var toEnlarge = true;
var x = 0;

var circle = function(){
    pic.innerHTML = ' ';
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", 250);
    c1.setAttribute("cy", 250);
    if (toEnlarge){
    x+=1;
    if (x >= 250){
      toEnlarge = false;
    };
  }
  else{
    x-=1;
    if( x <= 1 ){
      toEnlarge = true;
    };
  };
  c1.setAttribute("r", x);
  pic.appendChild(c1)
  console.log(requestID)
};

var toCircle = function(){
    clearInterval(circle);
    requestID = setInterval(circle, 10);
};

circleButton.addEventListener("click", toCircle);
