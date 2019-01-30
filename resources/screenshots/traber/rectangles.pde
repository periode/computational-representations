int cycles = 500;
int num = 0;

int rectWidth = 100;
int rectHeight = 70;


void setup() {
  size(640, 560, P2D);

  noStroke();
  background(220, 50, 50);
  
}

void draw() {
  int x = int(random(-rectWidth/2, 640 - rectWidth/2));
  int y = int(random(-rectHeight/2, 560 - rectHeight/2));
  
  /*if (num % 6 == 0) {
    fill(0, 0, 0, 200);
    
    while (get(x,y) != color(220, 50, 50) ) {
      print("hallo");
      x = int(random(-rectWidth/2, 640 - rectWidth/2));
      y = int(random(-rectHeight/2, 560 - rectHeight/2));
    }
    
    rect(x, y, rectWidth, rectHeight);
  } else*/ if (num % 2 == 0) {
    fill(0, 0, 0, 200);
    rect(x, y, rectWidth, rectHeight);
  } else {
    fill(255, 255, 255, 200);
    rect(x, y, rectWidth, rectHeight);
  }
  
  
  num++;
  if (num >= cycles) {
    noLoop();
  }
  
  delay(100);
}
