

let balls = []; // This is an empty array
let img;


function setup() {
	
	createCanvas(800,800);
	

noStroke();
colorMode(HSB);
// var b = new Bubbles(); 
// // This is me making a new instance or cookie
// // from my cookie cutter.


textAlign(CENTER);
textStyle(BOLD);
noCursor();

  let link = createA("https://nl06cvmfdn2.typeform.com/to/SC1Hpi1Z", "Sign Up Here!", "_blank");

  link.position(width/2, 700);
  link.style("font-size", "50px");
  link.style("color", "black");
}

function draw() {
	
background(200, 25, 100);


	for (let i = 0; i<balls.length; i++) {
		fill(i,255,255);
		balls[i].display();
		balls[i].bounce();
		// print(balls[i]);
	}

// image(img, width/2, height/2);

push();

translate(width/2, height/2);
textFont('Helvetica');
textSize(200);
fill(150);
text('ICCIT', 0, -50);

textSize(100);
fill(150);
text('End of Year', 0, 65);

textSize(200);
fill(150);
text('Show!!', 0, 250);


pop();
}



function mouseMoved() {

var b = new Bubbles();

b.x = mouseX;
b.y = mouseY;
b.r = random (255);
b.g = random (255);
b.b = random (255);
b.size = random(20,50);
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
	//	fill(this.r, this.g, this.b);
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