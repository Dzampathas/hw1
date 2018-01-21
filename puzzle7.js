function move(direction) {

while(getColor != "red" && remainingDots() > 0) {
  if(direction == "down") {
    down();
  }
  if(direction == "up") {
    up();
  }
}

if(remainingDots() > 0){
  right();
}
if(remainingDots() > 0){
  right();
}

}

while(remainingDots() > 0) {
  move(down);
  move(up);
}
