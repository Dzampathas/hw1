var count = 0;

function moveDown() {
  while(count < 8) {
    down();
    count++;
  }
  count = 0;
}

function moveUp() {
  while(count < 8) {
    up();
    count++;
  }
  count = 0;
}

moveDown();
right();
right();
moveUp();
right();
right();
moveDown();
right();
right();
moveUp();
right();
right();
moveDown();
right();


