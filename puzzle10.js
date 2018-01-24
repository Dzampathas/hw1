var tileColor = new Array(8);

for(var i = 0; i < 8; i++) {
	down();
	tileColor[i] = getColor();
}
down();
right();

for(var i = 0; i < 8; i++) {
  setColor(tileColor[i]);
  right();
  up();
}
up();
up();
