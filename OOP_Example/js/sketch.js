

let balls = []; // This is an empty array

function setup() {
	
	createCanvas(800,800);
	

noStroke();
// var b = new Bubbles(); 
// // This is me making a new instance or cookie
// // from my cookie cutter.

}

function draw() {
	
background(200);


	for (let i = 0; i<balls.length; i++) {
		balls[i].display();
		balls[i].bounce();
	print(balls[i]);
	}


	}




function mouseClicked() {

var b = new Bubbles();

b.x = mouseX;
b.y = mouseY;
b.r = random (255);
b.g = random (255);
b.b = random (255);
b.size = random(40,100);
b.speed = random (1,10);

balls.push(b);
// This^ this "pushing/adding" these values to my array
// called balls

}





class Bubbles { // Cookie cutter

// x, y, size, r,g,b, speed

	constructor (x,y,size,r,g,b,speed) {
		this.x;
		this.y;
		this.size; 
		this.r;
		this.g;
		this.b;
		this.speed;
	}

	display () {
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.size, this.size);
		this.y = this.y + this.speed;
		// This will make it go down. 
	}

	bounce() {
		if (this.y >= height || this.y <=0) {
			// if statement is when something happens
			// when a condition is met
// ^
			this.speed = this.speed * (-1);
		}

	}








}