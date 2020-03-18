var size = 100;
var buttonState = false;
var breatheState = true;
var angle = 325;
var increase = 0;
var startState = false;
var val = 325;
var countingState = false;
var counting = 0;

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
ellipse(width/2,height/2, angle + 325,angle + 325);
textSize(50);
fill(255);

if (buttonState == false) {
	noStroke();
	fill(0,0, 10);
	text('Click Me!', width/2, height/2);
	angle = 0;
	increase = 0;
	counting = 0;
	startState = false;
} else {
	noStroke();
	
	increase = increase + 0.09; 

	angle = map (sin (increase), -1, 1, 0, 1);

	// if (startState = false) {

	// 	val = 325;
	// 	startState = true;
	// } else {
	// 	val = 0;
	// }

	angle = map(angle, 0, 1, 0, 650) - val;
	
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

	if (angle >= 320) {
		breatheState = false;
	} else if (angle <= -320) {
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