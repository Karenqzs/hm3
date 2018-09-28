# hm3
1. What code draws the blades of grass?
stroke(random(60, 70), 100, 90); sets the color of grass, and line(x, height-10, x + random(-10, 10), height-10-random(h)); draws the blades of grass.
  
2. What code makes the "lawnmower" come by? How often does it come by?
 if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;

3. What's the point of the h variable?
h refers to height of lines.

4. What do the three numerical arguments of colorMode do?
In this case, color mode refers the hue, saturation, and brightness of grass.

5. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
changing the number of -10 will make the growing grass becoming higher up.



1. If an array has 5 elements in it, what are the valid index values for the array? (Hint: what's always the first index value?)
If an array has 5 elements in it, the valid index values for the array will be 4. The first index will be 0.

2. What is the difference between a for loop and a while loop?
while loop: set the condition “true or false” at first, then if the condition is true, run the code.
for loop: condensing all of elements in while loop together in a short version.

3. Use Google or your favorite search website to figure out what the three parts of a for loop are called in JavaScript.
The three parts are the initialization, the condition, and the afterthought.

4. How does code refer to the number of elements (aka "entries") in an array? (Hint: it shows up in the code you modified!)
Code calls for every elements in an array.


1. What's the point of an object?
The horizontal value “x” and the vertical value “y” determine the point of an object in canvas.


2. What's an example of a range you might use for the map function?
Making an object moving along with mouse to create some animation in the canvas.

3. What line of code would give me a random year in the last century?
  random(1901,2000);


