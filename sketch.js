function setup() {
  // put setup code here
  createCanvas(800,700);
  background(255,67,45);
 
//head
push();
  beginShape();
    noFill();
    stroke(15);
    strokeWeight(8);
    translate(187,336);
    vertex(-65, 15);
    bezierVertex(0, -40, 50, 0, 0, 0);
   // bezierVertex(-80, 0, -99, 0, 0, 0);
  endShape(); 
pop();

push();
  beginShape();
    noFill();
    stroke(15);
    strokeWeight(8);
    translate(188,337);
    vertex(-65, 15);
    bezierVertex(0, 0, 50, 0, 0, 0);
  endShape(); 
pop();

 //wings 
push();
  beginShape();
    noFill();
    stroke(15);
    strokeWeight(10);
    translate(300,200);
    vertex(-110, 141);
    bezierVertex(0, 60, 0, 0, 0, 0);
    bezierVertex(0, 0, 0, 0, 280, -41);
    bezierVertex(50, 0, 0, 0, 0, 0);
  endShape();
pop();

push();
  beginShape();
    noFill();
    stroke(15);
    strokeWeight(10);
    translate(430,291);
    vertex(-240,50)
    bezierVertex(0, 0, 0, 0, 30, -114);
  endShape();
pop();
  
push();
  beginShape();
    noFill();
    stroke(15);
    strokeWeight(10);
    translate(350,150);
    vertex(-100, 141);
    bezierVertex(0, 80, 0, 0, 0, 0);
    bezierVertex(0, 0, 0, 0, 300, -51);
    bezierVertex(55, 0, 0, 0, 0, 0);
  endShape();
pop();

push();
  beginShape();
    noFill();
    stroke(15);
    strokeWeight(10);
    translate(510,291);
    vertex(-240,30)
    bezierVertex(0, 0, 0, 0, 30, -174);
  endShape();
pop();


push();
  beginShape();
    noFill();
    stroke(15);
    strokeWeight(5);
    translate(510,291);
    vertex(-240,30)
    bezierVertex(0, 0, 0, 0, 55, 0);
  endShape();
 pop();

//squares and triangles 
push();
  fill(255,67,45);
  noStroke();
  translate(375,140);
  square(30, 20, 80);
pop();

push();
  fill(255,67,45);
  noStroke();
  translate(323,150);
  square(30, 20, 80);
pop();

push();
  fill(255,67,45);
  noStroke();
  translate(445,130);
  square(30, 20, 40);
pop();

push();
  fill(255,67,45);
  noStroke();
  translate(358,200);
  square(30, 20, 60);
pop();

push();
  fill(255,67,45);
  noStroke();
  translate(336,238);
  triangle(-70, 80, 68, 29, 89, 55);
pop();


push();
  fill(255,67,45);
  noStroke();
  translate(289,130);
  triangle(50, 80, 68, 29, 89, 55);
pop();

push();
  fill(255,67,45);
  noStroke();
  translate(461,130);
  triangle(60, 60, 67, 29, -50, 50);
pop();

}

function draw() {
  // put drawing code here
 
 
}