
var sketch1 = function (p) {

p.x = 10;
p.posX = 10;
p.posY = 10;

p.hitH = false;
p.hitW = false;
p.state = false;

	p.setup = function() {
	var canvas = p.createCanvas(
	1100, 500);

	canvas.parent('sketch-holder-one');
	p.background(255);
	p.colorMode(p.HSB, 255);

	}


	p.draw = function () {
  p.noFill();
  p.strokeWeight(5);
 // fill(x, 255, 255);
  p.stroke(p.x, 255, 255);
  p.ellipse(p.posX, p.posY, 20 + p.x*0.5, 20 + p.x*0.5);

  if (p.hitH == false) {
    p.posY = p.posY + 3;
  } else {
    p.posY = p.posY - 3;
  }

  if (p.hitW == false) {
    p.posX = p.posX + 3;
  } else {
    p.posX = p.posX - 3;
  }
  
  if ( p.posX >= p.width) {
  p.hitW = true;
  } else if (p.posX <= 0) {
   p.hitW = false;
  }
  
    if ( p.posY >= p.height) {
  p.hitH = true;
  } else if (p.posY <= 0) {
   p.hitH = false;
  }

  if (p.state == false) {
    p.x = p.x + 1;
  } else {
    p.x = p.x - 1;
  }

  if (p.x >= 255) {
    p.state = true;
  } else if (p.x <= 0) {
    p.state = false;
  }
}

}

var sketch2 = function(p){

p.x = 0;



p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-two');
p.background(255);
//p.colorMode(p.HSB, 255);

}

p.draw = function () {

p.ellipse(p.width/2, p.x, 300,300);

p.x = p.x + 3;

if (p.x >= p.height) {

	p.x = 0;
}
}
}

var sketch3 = function(p){

p.x = 0;



p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-three');

//p.colorMode(p.HSB, 255);

}

p.draw = function () {
p.background(255);
p.ellipse(p.width/2, p.x, 300,300);

p.x = p.x + 3;

if (p.x >= p.height) {

	p.x = 0;
}
}
}

var sketch4 = function(p){

p.x = 0;



p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-four');

//p.colorMode(p.HSB, 255);

}

p.draw = function () {

p.fill(p.x*2, 0, p.x*2);
p.ellipse(p.x, p.height/2, 300 - p.x,300 - p.x);

p.x = p.x + 3;

if (p.x >= p.height + 300) {

	p.x = 0;
}
}
}


var sketch5 = function(p){

p.x = 0;



p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-five');

p.colorMode(p.HSB, 255);

}

p.draw = function () {

p.stroke(p.x, 255, 255);
p.strokeWeight(2);
p.ellipse(p.x*4, p.height/2, 200,200);

p.x = p.x + 1;

if (p.x >= 255) {

	p.x = 0;
}
}
}

var sketch6 = function(p){

p.x = 0;



p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-six');

p.colorMode(p.HSB, 255);

}

p.draw = function () {
p.noStroke();
p.fill(p.x, 255, 255, 100);

p.ellipse(p.x*4, p.height/2, 200,200);

p.x = p.x + 1;

if (p.x >= 255) {

	p.x = 0;
}
}
}

var sketch7 = function(p){

p.x = 0;
p.y = 0;



p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-seven');

p.colorMode(p.HSB, 255);

}

p.draw = function () {

p.x = p.random(1100);
p.y = p.random(500);
p.strokeWeight(p.y/15);

p.beginShape();
p.stroke(p.y/2, 255,255);
p.vertex(p.width/2, p.height/2);
p.vertex(p.x, p.y);
p.endShape();
}
}

var sketch8 = function(p){

p.x = 0;
p.y = 0;

p.a = 0;
p.b = 0;



p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-eight');

p.colorMode(p.HSB, 255);

}

p.draw = function () {
p.x = p.random(1100);
p.y = p.random(500);
p.a = p.random(1100);
p.b = p.random(500);

p.strokeWeight(p.random(4));
p.line (p.x,p.y,p.a,p.b);

}
}


var sketch9 = function(p){

p.x = 550;
p.y = 200;

p.a = 200;




p.setup = function () {
var canvasTwo = p.createCanvas(
	1100, 500);

canvasTwo.parent('sketch-holder-nine');

p.colorMode(p.HSB, 255);

}

p.draw = function () {

p.fill(p.y, 255,255, 100);
p.ellipse(p.x,p.y,p.a,p.a);

p.x = p.x + (p.random(-20,20));
p.y = p.y + (p.random(-10,10));
p.a = p.a + (p.random(-15,15));


}
}

var sketch10 = function(p){

p.r = 255;

p.setup = function () {
var canvasTwo = p.createCanvas(
  1100, 500);

canvasTwo.parent('sketch-holder-ten');

}

p.draw = function () {
p.background(255);
p.noStroke();
p.fill(p.r, 0,0);

p.ellipse (550, 250, 200,200);

if (p.mouseX > 550) {

  p.r = 0;
} else {

p.r = 255;

}
}
}

var myp5 = new p5(sketch1);
var myp5Two = new p5(sketch2);
var myp5Three = new p5(sketch3);
var myp5Four = new p5(sketch4);
var myp5Five = new p5(sketch5);
var myp5Six = new p5(sketch6);
var myp5Seven = new p5(sketch7);
var myp5Eight = new p5(sketch8);
var myp5Nine = new p5(sketch9);

var myp5Ten = new p5(sketch10);


function resetBackground() {
myp5Seven.background(255);
myp5Eight.background(255);
myp5Nine.background(255);
myp5Nine.x = 550;
myp5Nine.y = 200;


}
setInterval(resetBackground, 5000); 
