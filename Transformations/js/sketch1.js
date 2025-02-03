

// We are trying to make a bouncing ball

var Ypos = 10;
var speed = 1;

// value + 5... 

// value - 10

function setup () {
createCanvas(600,600);
}


function draw() {

background(175);
ellipse(width/2, Ypos + speed, 50,50); // xPos, yPos, w, h


Ypos = Ypos + speed 

// 0, 1, 2, 3, 4,...... 600

// 600, 599, 598, 597..... 0


if (Ypos > 600 || Ypos < 0) { //

// If Ypos is greater than 600 OR Ypos is less that 0, 
	// then do the action... 
	//|| =  OR

	speed = speed * (-1);
} 

}








