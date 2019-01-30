float x1, y1;
float rectW, rectH;
float brightness;

void setup() {
  colorMode(HSB, 360, 100, 100);
  size(600, 600);
  
  noStroke();
  noLoop();
  smooth();
}

void draw() {
  
  background(125);
  
  for (int i=0; i < 1000; i++)
  {
    if (i % 2 == 0)
    {
      brightness = 100;
    }
    else
    {
      brightness = 0;
    }
    
    fill(0, 0,  brightness);
    x1 = random(width);
    y1 = random(height);
    rectW = random(width-i);
    rectH = random(width-i);
    
    rect(x1, y1, rectW*0.1, rectH, 2);

  }
}
