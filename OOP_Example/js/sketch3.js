function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 50);
  
  // Character body
  fill(100, 100, 255);
  ellipse(width / 2, height / 2, 150, 180);

  // Closed eyes
  fill(0);
  rect(width / 2 - 35, height / 2 - 20, 20, 5);
  rect(width / 2 + 15, height / 2 - 20, 20, 5);

  // Zzz animation
  fill(255);
  textSize(30);
  text("Z", width / 2 + frameCount % 100, height / 2 - 80 - frameCount % 50);
}


