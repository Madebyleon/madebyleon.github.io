


function setup () {

createCanvas(500,500);
background (175);
rectMode(CENTER);

}


function draw () {

// RULE: Rotation takes place around the 0,0 position. 



push();
translate(width/2, height/2);
rotate(radians(frameCount));
rect (0, 0, 100,100);
pop();



rect(100,100, 50,50);



}

