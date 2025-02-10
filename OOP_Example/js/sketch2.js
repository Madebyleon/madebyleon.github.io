
let squares = [];


function setup () {

createCanvas(800,800);
rectMode(CENTER);
//noFill();
background(175);
colorMode(HSB);

// hue, saturation, brightness

// r, g, b
// 0-255
}


function draw() {
for (let i = 0; i<squares.length; i++) {
	fill(i,255,255, 5);

	// ^^ hue, saturation, brightness
	squares[i].show();
	squares[i].rotation();
}
}

function mouseMoved() {
var s = new movingSquares(); 
// This is creating an instance^^ 
s.x = mouseX;
s.y = mouseY;
s.r = random(255);
s.g = random(255);
s.b = random(255);
s.size = random(50,200);
s.angle = 0;
s.speed = random(1,5);

squares.push(s);
// This^^ is adding all those values to my new array
// called squares

}


class movingSquares {

constructor(x,y,size,r,g,b,rSpeed,angle) {

this.x;
this.y;
this.size;
this.color = (r, g, b);
this.rSpeed;
this.angle;

}

show () {
	push();
	translate(this.x, this.y)
	rotate(radians(this.angle));
	//fill(this.color(this.r, this.g, this.b));
	rect(0, 0, this.size, this.size);
	pop();
}

rotation() {

	this.angle = this.angle + this.speed;
}
}









