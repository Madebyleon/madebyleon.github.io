
var sketch1 = function (p) {

p.x = 0;
p.state = false;

p.xPos;
p.yPos;

p.col = 30;



p.setup = function () {
var canvas = p.createCanvas(1100,500);

canvas.parent('sketch-holder-one');

p.colorMode(p.HSB,100);
p.textSize(20);
p.background(0, 0, 100);
p.textAlign(p.CENTER);
p.fill(0, 0, 50);
p.text('Click Here!', p.width/2 , p.height/2);

}

p.draw = function () {
// fill(0,10, 100, 1);
// rect(0,0,width,height);


p.noFill();
p.strokeWeight(0.5);




if (p.state == true) {
	for (p.i = 0; p.i < 2; p.i++) {
	p.stroke(p.i*15 + p.col, 255,150);
	p.ellipse(p.mouseX, p.mouseY, 100*p.i + p.x, 100*p.i + p.x);
}
	p.x++; 
	// if (p.x > 100) {

	// 	p.state = false;
	// 	p.x = 0;
	// }
}



}

p.mousePressed = function () {

p.state =! p.state;

p.xPos = p.mouseX;
p.yPos = p.mouseY;
p.x = 0;

p.col = p.random(0,100);


}

}

var myp5 = new p5(sketch1);



