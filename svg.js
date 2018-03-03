var pic = document.getElementById("a");
var stop = document.getElementById("stop");
var circleButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvdButton");

var requestID;
var toEnlarge = true;
var toXIncrease = true;
var toYIncrease = true;
var x = 0;
var DVDx = 250;
var DVDy = 250;

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
  pic.appendChild(c1);
  console.log(requestID);
};

var toStop = function(){
  clearInterval(requestID);
}

var toCircle = function(){
    toStop();
    pic.innerHTML = ' ';
    x = 0;
    requestID = setInterval(circle, 10);
};

var dvd = function(){
  pic.innerHTML= ' ';
  var c1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  c1.setAttribute("x", DVDx);
  c1.setAttribute("y", DVDy);
  c1.setAttribute("width", 50);
  c1.setAttribute("height", 30);
  if (toXIncrease){
    DVDx += 1;
    if(toYIncrease){
      DVDy += 2;
    }
    else{
      DVDy-= 2;
    }
  }
  else{
    DVDx -= 1;
    if(toYIncrease){
      DVDy += 2;
    }
    else{
      DVDy-= 2;
    }
  }
  if(DVDx >= 450) {
    toXIncrease = false;
  }
  if(DVDx <= 0){
    toXIncrease = true;
  }
  if(DVDy >= 470){
    toYIncrease = false;
  }
  if(DVDy <= 0){
    toYIncrease = true;
  }
  pic.appendChild(c1);
};

var toDvd = function(){
  toStop();
  pic.innerHTML = ' ';
  toXIncrease = true;
  toYIncrease = true;
  DVDx = 250;
  DVDy = 250;
  requestID = setInterval(dvd, 10);
}

stop.addEventListener("click", toStop);
circleButton.addEventListener("click", toCircle);
dvdButton.addEventListener("click", toDvd);
