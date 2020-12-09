let val = 0;
let xPos;
let yPos



function setup() {

createCanvas(300, 500);
noStroke();
colorMode(HSB);

xPos = width/2;
yPos = height;
}


function draw() {
	background(225);
fill(val, 255,255);
ellipse(xPos, yPos - val, 50,50);


if (val >=0) {


	val = val - 1;
}

}

function deviceMoved() {

	val = val + 5;
}