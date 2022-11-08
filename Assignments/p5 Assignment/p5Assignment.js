let keyValue = 0;

function setup() {
  createCanvas(1000, 600);
  background(50, 133, 168);
  c = color(171, 186, 32);
  fill(c);
  rect(0,500,1000,100);
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
    else if (keyValue == 66) {
      c = color(210,180,140);
      fill(c);
      rect(mouseX-40,mouseY-40,80,140);
    }
    else if (keyValue == 82) {
      c = color(186, 78, 32);
      fill(c);
      triangle(mouseX-50,mouseY+50,mouseX+50,mouseY+50,mouseX,mouseY-40);
    }
    else if (keyValue == 83) {
      c = color(168, 94, 50);
      fill(c);
      circle(mouseX,mouseY,15);
    }
    else if (keyValue == 87) {
      c = color(32,178,170);
      fill(c);
      rect(mouseX-5,mouseY-5,10,10);
    }
    else if (keyValue == 84) {
      c = color(168, 111, 50);
      fill(c);
      rect(mouseX-5,mouseY,10,50);
      c = color(97, 168, 50);
      fill(c);
      circle(mouseX,mouseY,30);
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