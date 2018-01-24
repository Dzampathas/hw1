var Tilecolor = getColor();  

function moveRight() {
  Tilecolor = getColor();
  while(Tilecolor == false && remainingDots() >= 0) {
    right();
    Tilecolor = getColor();
  }
  if(Tilecolor == "blue"){
    down();
  }
  
  if(Tilecolor == "red"){
    up();
  }
}

while(remainingDots() > 0) {
  moveRight();
}
