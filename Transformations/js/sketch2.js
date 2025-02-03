

// 5 bouncing balls... 

 var yPos = []; // This is me declaring a array with no values inside it
 var speed = []; 
 var xPos = [];
 var numberOfBalls = 50;

 var r = [];
 var g = [];
 var b = [];

function setup () {
createCanvas(500,500);
noStroke();
for (var i = 0; i < numberOfBalls; i = i + 1) {
// declaration, condition, action^^
yPos[i] = random(500);
xPos [i] = random (500);
speed[i] = random(10,30);

r[i] = random(255);
g[i] = random(255);
b[i] = random(255);
}
}

function draw () {
background(175);

for (var i = 0; i < numberOfBalls; i++){
	fill(r[i], g[i], b[i]);
	ellipse(xPos[i], yPos[i] + speed[i], 50,50);
	yPos[i] = yPos[i] + speed[i]; 

if (yPos[i] > 500 || yPos[i] < 0) {
	speed[i] = speed[i]*(-1);
}

}





}