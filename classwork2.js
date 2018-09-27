function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
let x = 25;
let y = 25;

function draw() {
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(100), 20, 255);
  ellipse(random(0,width), random(0,height), 20);

  // set up next circle
  x = x + 100;

  // if we hit the right edge, go down a line
  if (x > width-25) {
    x = 25;
    y = y + 25;
  }

  // if we hit the bottom edge, reset to top
  if (y > height-25) {
    y = 25;
  }
}
