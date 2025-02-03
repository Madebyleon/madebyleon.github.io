function setup () {
	
createCanvas(900,900);
noStroke();

// colorMode(HSB); // hue, saturation, brightness
}


function draw() {
	background(175);

for (var i = 0; i < width; i = i + 5) {


var upDown = sin(i* 0.03 + frameCount * 0.1) * 100;

var r = sin(i*03 + frameCount* 0.4)*255;
var g = sin(i*02 + frameCount* 0.2)*255;
var b = sin(i*04 + frameCount* 0.3)*255;


fill(r, g,b);

ellipse(i, height/2 - upDown, 20,20);
}




}