class Shape {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  update(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

function isOverlapping(shape1, shape2) {
  return dist(shape1.x, shape1.y, shape2.x, shape2.y) < (shape1.size + shape2.size) / 2;
}

let shape1, shape2;

function setup() {
  createCanvas(400, 400);
  shape1 = new Shape(100, 200, 50, 'red');
  shape2 = new Shape(300, 200, 50, 'blue');
}

function draw() {
  background(220);
  shape1.display();
  shape2.display();
  shape1.update(1, 0);
  if (isOverlapping(shape1, shape2)) {
    shape1.color = 'green';
    shape2.color = 'green';
  }
}

