var curColor;
while(remainingDots() > 0) {
  if(getColor() != false) {
  	curColor = getColor();
  }
  if(curColor == "green"){
    right();
  }
  if(curColor == "red"){
    left();
  }
  if(curColor == "blue"){
    up();
  }
  if(curColor == "yellow"){
    down();
  }
}
