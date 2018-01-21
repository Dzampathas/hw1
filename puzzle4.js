var count = 0;

while(count < 4) {
  down();
  count = count + 1;
}
count = 0;
right();
var tileColor = getColor();
down();
setColor(tileColor);
right();
right();
up();
right();
tileColor = getColor();
down();
setColor(tileColor);
right();
right();
