// draw 30 points 
// connect them with lines

PVector [] points = new PVector [30];
void setup() {
  size(600, 600);
  background(0);
  for (int i = 0; i < points.length; i++) {
    points[i] = new PVector(random(10, 600), random(10, 600));
    }
  noLoop();
}

void draw() {
  for (int i = 0; i < points.length; i++) {
    stroke(255);
    strokeWeight(15);
    point(points[i].x, points[i].y);
    for (int j = 0; j < points.length; j++) {
      //strokeCap(ROUND);
      strokeWeight(1);
      stroke(100, 150, 200);
      line(points[i].x, points[i].y, points[j].x, points[j].y);
    }
  }
}
