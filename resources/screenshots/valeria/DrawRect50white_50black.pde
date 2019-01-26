// radius
float r = 0.5;

// colour
color black = color(0);
color white = color(255);

void setup() {
  size(600, 600);
  background(0);
  noLoop();
}

void draw() {
  for (int i = 0; i < 200; i++) {
    // check for odd or even
    if (i % 2 == 0) {
      fill(black);
    } else {
      fill(white);
    }

    stroke(100);
    strokeWeight(2);
    strokeCap(ROUND);
    rect(random(height), random(width), r*i, r*i);
    }
  }
   
