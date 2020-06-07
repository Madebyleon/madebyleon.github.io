



function setup() {
  createCanvas(500, 500);
  
  var coneX = width/2;
	var coneY = height/2;
  background (255);
  
  push();
  translate(coneX, coneY);
  fill(0);
  stroke(255);
  strokeWeight(2);
  for (i = 0; i <= 4*PI; i = PI/300.0 + i) {
  	triangle(-15, 10, 15, 10, 0, 200);  
  	ellipse(0,0,35,35);
    rotate(i);
  }
  
  pop();
}