int numRects = 800;

void setup() {
  size(500, 500);
  background(200);
  noLoop();
}

void draw() {
  for (int i = 0; i < numRects; i++) {
    textSize(32);
    fill(255);
    text("mid sized rectangle", random(-100, width+100), random(-100, height+100));
    fill(0);
    text("mid sized rectangle", random(-100, width+100), random(-100, height+100));
  }
  
  saveFrame("frame.png");
}
