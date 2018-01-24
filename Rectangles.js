// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

function draw(distance, direction, color) {
 for( var d = 0; d < distance; d++) {
  direction();
   setColor(color);
 }
}

function rect(x , y , width, height, color, fillColor) {
  var curPos = [0,0];
  //keep tracks of the position
  
  for( var i = 0; i < x; i++) {
    right();
    curPos[0]++;
  }
  for( var b = 0; b < y; b++) {
    down();
    curPos[1]++;
  }
  //move to x,y position
  
  draw(width, right, color);
  draw(height, down, color);
  draw(width, left, color);
  draw(height, up, color);
  //draw box
  
  
  for( i = curPos[0]; i > (x + 1); i--) {
   right(); 
    curPos[0] ++;
  }
  
  for( b = curPos[1]; b > (y +1); b--) {
   down(); 
    curPos[1] ++;
  }
  //moving to top
  down();
  for ( b = curPos[1]; b < (y + height-1); b++){ 
  draw(width - 1, right, fillColor);
  for(i = 0; i < width-1; i ++) {
  	left(); 
  }
  down();
  curPos[1] ++;
  }

  
  
  //fill box
  
  for( i = curPos[0]; i > 0; i--) {
   left(); 
    curPos[0] --;
  }
  for( b = curPos[1]; b > 0; b--) {
   up(); 
    curPos[1] --;
  }
  
  //return to 0
  
}

rect(10,10,10, 30, "red", "green");
rect(50, 25, 20 , 37, "blue", "red");
rect(15, 70, 12 , 25, "green", "blue");
rect(1, 35, 27, 42, "yellow", "red");
