
var distanceFromMouseX; 
var distanceFromMouseY;

var stateChangeX = false; 
var directionX = 1;

var stateChangeY= false; 
var directionY = 1;


var ellipseOneX = 640;
var ellipseOneY = 270;

var j;
function setup() {
createCanvas(1280,540);
background(225);
noStroke();
colorMode(HSB, 150);
}

function draw () {
background(225);

distanceFromMouseX = int (dist(ellipseOneX,ellipseOneY, mouseX, mouseY));

for (var i = 15; i > 0; i--) {
fill(i*10, 255,255);
j = i*2;
ellipse(ellipseOneX - distanceFromMouseX*2*directionX/j, ellipseOneY, 500,500);

}

if (mouseX > ellipseOneX) {

	stateChangeX = false;
}  else {
stateChangeX = true;

}

if (stateChangeX == false) {

	directionX = -1;

} else {

	directionX = 1;
}

}
