right();
var direction;


if(getColor() == "blue") {
 down();
 down();
 down();
 direction = down;
}
if(getColor() == "red") {
  up();
  up();
  up();
  direction = up;
}


if(getColor() == "blue") {
  right();
}
if(getColor() == "red") {
  left();
}


if(direction == "up") {
  up();
}
if(direction == "down"){
  down();
}
