function setup() {
  createCanvas(400, 400);
  background(0, 20, 80);
}

var fromX;
var fromY;
var toX;
var toY;
var step = 2.5;
var a;
var b;

function draw() {
  // draw background that fades stars slowly
  background(0, 20, 80, 1);

  // draw stars
  if (random() > 0.9) {
    stroke(255);
    point(random(width), random(height));
  }

  // create shooting stars
  if (random() > 0.95 && step >= 2.5) {
    fromX = random(width);
    fromY = random(height/2);
    toX = random(fromX+10, width);
    toY = random(fromY+10, height/2);
    step = 0;
  }

  // draw shooting stars
  if (step < 2.5) {
    // fade background
    let nextStep = step + 0.02;
    strokeWeight(3);
    stroke(0, 20, 80, 30);
    line(fromX, fromY, toX, toY);
    strokeWeight(1);
    // draw star
    if (step < 1) {
      stroke(255, (1-step) * 200);
      line(lerp(fromX, toX, step),     lerp(fromY, toY, step),
           lerp(fromX, toX, nextStep), lerp(fromY, toY, nextStep));

    if (step < 1) {
      stroke(255, (1-step) * 400);
      line(lerp(fromX, toX, step),     lerp(fromY, toY, step),
           lerp(fromX, toX, nextStep), lerp(fromY, toY, nextStep));
    }
    step = nextStep;
  }

  // draw ground
  noStroke();
  fill(0, 10, 20);
  rect(0, height*0.6, width, height);



  // draw lake
  noStroke();
  fill(0, 20, 60);
  ellipse(0, height, width*2.5, height*0.75);

  //buildings
  fill(0,0,0)
  rect(200, 140, 30,100);


  fill(0,0,0)
  rect(200, 170, 50,70);

  fill(0,0,0)
  rect(300, 140, 60,100);

  //tree
  fill(0,0,0)
  ellipse(100,220,20)

  fill(0,0,0)
  rect(98,220,5,20)

    fill(0,0,0)
  ellipse(80,220,20)

  fill(0,0,0)
  rect(78,220,5,20)

      fill(0,0,0)
  ellipse(60,220,20)

  fill(0,0,0)
  rect(58,220,5,20);


  if (frameCount % 30==0) {
    a = random(90,200)
    b = random(0,50)}

  fill(0,0,0)
  rect(130, 170, 50,70);


  fill(200,200,0,a)
  rect(135,175,10,10)

  fill(200,200,0,b)
  rect(150,175,10,10)

  fill(200,200,0,a)
  rect(165,175,10,10)



}
}
