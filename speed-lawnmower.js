function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(100);
}

var x = 0;
var h = 10;
var z = 0;
var i = 20;

function draw() {

  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));
  line(z, height-10, z + random(-10, 10), height-10-random(i));

  x = x + 10;
  z = z + 5;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
     if (z > width) {
    z = random(10);
    i = i + 3;
  }

 if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
    i = 10;
  }

  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
