let keyValue = 0;

function setup() {
  createCanvas(800, 400);
  background(100);
}

function draw() {
  let c;
  noStroke();
  if (mouseIsPressed) {
    if (keyValue == 72) {
      c = color(210,180,140);
      fill(c);
      rect(mouseX-40,mouseY-40,80,80);
    }
    else if (keyValue == 82) {
      c = color(34,139,34);
      fill(c);
      triangle(mouseX-50,mouseY+50,mouseX+50,mouseY+50,mouseX,mouseY-40);
    }
    else if (keyValue == 87) {
      c = color(32,178,170);
      fill(c);
      rect(mouseX-5,mouseY-5,10,10);
    }
    else if (keyValue == 68) {
      c = color(0,0,0);
      fill(c);
      rect(mouseX-5,mouseY-10,10,20);
    }
  }
}

function keyPressed() {
  keyValue = keyCode;
}