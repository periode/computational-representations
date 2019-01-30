int hue;

float x1, x2, y1, y2;


void setup() {
  colorMode(HSB, 360, 100, 100);
  
  size(600, 600);
  
  x1 = random(width);
  y1 = random(width);
 
  smooth();
  noLoop();
}

void draw() {
  
  background(0);
  
  for (int i=0; i < 30; i++)
  {
    float hue = random(360);
    fill(hue, 100, 100);
    stroke(hue, 100, 100);
    x2 = random(width);
    y2 = random(width);
    ellipse(x1, y1, 10, 10);
    ellipse(x2, y2, 10, 10);
    line(x1, y1, x2, y2);
    
    x1 = x2;
    y1 = y2;
    
  }
}
