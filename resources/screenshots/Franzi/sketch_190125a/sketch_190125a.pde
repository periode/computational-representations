PVector[] points;

void setup(){
  size(550,200);
  background(200);
  int x =0;
  points = new PVector[30];
  for(int j =45; j<=150; j+=50)
  {
    for(int i=45; i<=500; i +=50)
    {
      fill(255,0,0);
      stroke(255,0,0);
      ellipse(i,j,40,40);
      points[x] = new PVector(i,j);
      x++;
    }
  }
  
  for( PVector point : points)
  {
     for( PVector point2 : points)
      {
        stroke(255,0,0);
        line(point.x, point.y, point2.x, point2.y);
      }
    
  }
  
}


void draw(){
 
}
