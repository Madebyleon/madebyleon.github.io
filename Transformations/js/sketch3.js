

// var size = 100;

function setup () {
createCanvas(500,500);
noStroke();


}


function draw () {

var size = sin(frameCount* 0.05)* 200;

var position = sin (frameCount*0.05)* 200;

background(175);
size = size + 10;
ellipse(width/2, position, size,size);


// push();
// translate(width/2, height/2);

// rotate(radians(size));
// rect(size*2,0, 100,size);
// pop();


 

}