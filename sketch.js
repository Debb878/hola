function setup() {
  // put setup code here
  createCanvas(800,700);
  background(255,67,45);
 
 push();
 beginShape();
    noStroke();
	translate(0,60);
  	vertex(197, 220);
  	quadraticVertex(234, 280, 81, 371);
  	bezierVertex(276, 263, 318, 187, 459, 93);
endShape();
pop();

push();
	fill(255,67,45);
	noStroke();
	translate(199,222);
	circle(30, 40, 55);
pop();

pop();
beginShape();
	fill(255,67,45);
	noStroke();
	translate(-1, 105);
  vertex(189, 159);
  vertex(230, 177);
  vertex(178, 201);
endShape();
pop();
//beginShape();
	//vertex(267, 168);
	//quadraticVertex(252, 220, 177, 250);
	//bezierVertex(296, 201, 335, 134, 427, 100);
//endShape();


}

function draw() {
  // put drawing code here
 
 
}