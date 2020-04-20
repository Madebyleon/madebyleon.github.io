var size = 100;
var buttonState = false;
var breatheState = true;
var angle = 325;
var increase = 0;
var startState = false;
var val = 225;
var countingState = false;
var counting = 0;

function preload() {
  img = loadImage('assets/image1.png');
}

function setup() {
//loadFont('assets/coolvetica.ttf', drawText);
createCanvas(800,800);
colorMode(HSB);
//textFont(coolvetica);
textAlign(CENTER, CENTER);

}

function draw() {
background(0,0, 95);
noFill();

stroke(map (angle, 0, 650, 190, 130),150,150)
strokeWeight(map(angle, 0, 650, 20, 8));
ellipse(width/2,height/2, angle + 225,angle + 225);
textSize(50);
fill(255);

if (buttonState == false) {
	noStroke();
	fill(0,0, 10);
	image(img, width/2, height/2);
	text('Click Me!', width/2, height/2 + 100);
	angle = 0;
	increase = 0;
	counting = 0;
	startState = false;
} else {
	noStroke();
	
	increase = increase + 0.009; 

	angle = map (sin (increase), -1, 1, 0, 1);

	// if (startState = false) {

	// 	val = 325;
	// 	startState = true;
	// } else {
	// 	val = 0;
	// }

	angle = map(angle, 0, 1, 0, 450) - val;
	
	textSize(200);
	fill(0,0, 10);
	text(counting, width/2,height/2);
	textSize(50);


	if (breatheState == true) {
		fill(0,0, 10);
		text('Breathe  In!', 600, 600);

		if (countingState == false) {
			counting = counting + 1;
			countingState = true;
		}

	} else {
		fill(0,0, 10);
		text('Breathe Out!', 600, 600);
	 	countingState = false;
	}

	if (angle >= 210) {
		breatheState = false;
	} else if (angle <= -210) {
		breatheState = true;
	}

	if (counting == 7) {

		buttonState = false;
		counting = 0;
	}




}


}

// function drawText() {
// textSize(50);
// fill(255);
// text('Click Me!', width/2, height/2);
// }

function mouseClicked() {

buttonState = !buttonState;

}