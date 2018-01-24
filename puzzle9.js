function draw(direction) {
  setColor("blue");
  if(direction == "up"){
    up();
  }
  if(direction == "down"){
    down();
  }
  if(direction == "left"){
    left();
  }
  if(direction == "right"){
    right();
  }
}

var count = 0;
while(count < 100){
  draw("right");
  count = count + 1;
}
count = 0;
while(count < 100){
  draw("down");
  count = count + 1;
}
count = 0;
while(count < 100){
  draw("left");
  count = count + 1;
}
count = 0;
while(count < 100){
  draw("up");
  count = count + 1;
}
count = 0;
