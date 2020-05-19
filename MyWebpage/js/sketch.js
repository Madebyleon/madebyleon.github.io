function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw () {
noStroke();
fill(random(255), random(255), random(255), 10);
ellipse(random(width), random(height), 50,50);

}