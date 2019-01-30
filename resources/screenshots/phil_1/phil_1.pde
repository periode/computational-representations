Point[] points;
int numPoints = 30;

void setup() {
  size(500, 500);
  background(0);
  noLoop();

  points = new Point[numPoints];
  for (int i=0; i< numPoints; i++) {
    points[i] = new Point(random(width), random(height), 5);
  }
}

void draw() {
  // points
  for (int i = 0; i < numPoints; i++) {
    points[i].display();
  }

  // lines
  stroke(255, 50);
  strokeWeight(1.5);
  for (int i=0; i< numPoints; i++) {
    for (int j=i+1; j< numPoints; j++) {
      line(points[i].x, points[i].y, points[j].x, points[j].y);
    }
  }
  
  saveFrame("frame.png");
}

class Point {
  float x, y, d;

  Point(float x, float y, float d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  void display() {
    fill(255);
    noStroke();
    ellipse(x, y, d, d);
  }
}
