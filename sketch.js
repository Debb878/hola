function setup() {
  // put setup code here
  createCanvas(500,500,WEBGL);
   background(255,67,45);

}

function draw() {
  // put drawing code here
  //background(255,67,45);
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  lights(50);
  fill(245, 255, 48);
  box(50, mouseX, mouseY);
}