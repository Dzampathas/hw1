function moveRight() {
  while(getColor() != "blue" || getColor() != "red" || remainingDots() == 0) {
    right();
  }
  if(getColor() == "blue"){
    down();
  }
  if(getColor() == "red"){
    up;
  }
}

while(remainingDots() > 0) {
  moveRight();
}
