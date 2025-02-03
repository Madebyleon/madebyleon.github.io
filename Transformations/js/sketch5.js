function setup () {
	
createCanvas(800,800);

background(175);
//noStroke();

}


function draw() {
	background(175);




 for (var j = 0; j < height; j = j + 25) {
for (var i = 0; i < width; i = i + 25) {

fill(i,j, 100); // 0 - 255
var angle = (i + j + frameCount) * 0.05;

// sin wave ---> - 1 to 1

var size = map(sin(angle), -1, 1, 10, 50);

// map (value, lower val, upper val, new lower val, new upper val)

ellipse(i, j, size,size);

}
 }



}