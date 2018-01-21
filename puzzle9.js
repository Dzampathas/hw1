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
while(count < 9){
  draw(right);
  count = count + 1;
}
while(count < 9){
  draw(down);
  count = count + 1;
}
while(count < 9){
  draw(left);
  count = count + 1;
}
while(count < 9){
  draw(up);
  count = count + 1;
}
