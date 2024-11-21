let circleX, circleY, circleDX, circleDY, circleRadius;
let rectX, rectY, rectDX, rectDY, rectWidth, rectHeight;

function setup() {
  createCanvas(400, 400);
  reset();
  noStroke();
}

function draw() {
  background(220);

  fill(255, 0, 0);
  circle(circleX, circleY, circleRadius);

  fill(0, 0, 255);
  rect(rectX, rectY, rectWidth, rectHeight);

  circleX += circleDX;
  circleY += circleDY;
  rectX += rectDX;
  rectY += rectDY;

  if (circleX - circleRadius < 0 || circleX + circleRadius > width) {
    circleDX *= -1;
  }
  if (circleY - circleRadius < 0 || circleY + circleRadius > height) {
    circleDY *= -1;
  }
  if (rectX < 0 || rectX + rectWidth > width) {
    rectDX *= -1;
  }
  if (rectY < 0 || rectY + rectHeight > height) {
    rectDY *= -1;
  }

  if (dist(circleX, circleY, rectX + rectWidth / 2, rectY + rectHeight / 2) < (circleRadius + min(rectWidth, rectHeight) / 2)) {
    circleDX *= -1;
    circleDY *= -1;
    rectDX *= -1;
    rectDY *= -1;
  }
}

function keyPressed() {
  reset();
}

function reset() {
  circleX = random(width);
  circleY = random(height);
  circleDX = random(-2, 2);
  circleDY = random(-2, 2);
  circleRadius = random(20, 40);

  rectX = random(width);
  rectY = random(height);
  rectDX = random(-2, 2);
  rectDY = random(-2, 2);
  rectWidth = random(40, 60);
  rectHeight = random(20, 40);
}
