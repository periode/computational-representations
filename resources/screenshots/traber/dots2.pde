int num = 0;

void setup() {
  size(640, 560, P2D);

  noStroke();
  //fill(204);
  fill(0, 0, 0, 8);

  
  //for (int i = 0; i < 30; i++) {
  //  ellipse(200, 200, 20, 20);
  //  delay(100);
  //}
  
  //noLoop();
}

void draw() {
  ellipse(200, 200, 20, 20);
  num++;
  
  
  if (num >= 30) {
    noLoop();
  }
  
  delay(100);
}
