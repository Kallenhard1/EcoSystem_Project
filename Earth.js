class Earth {
  constructor(x, y) {
    //this.lcurves = grad.copy();
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    
  }
  
  windForce() {
    let wind = createVector(0.5, 0);
    this.acc.add(wind);
  }
  
  //This function has to generate an precedural earth terrain.
  //But i dont hava an idea of how i will do this...
  //I will use Perlin noise now.
  //Now i have to set the level curves in this perlin noise terrain.
  //My loop is get to infinite and this is bad, because i only want four ellipses. 
  render() {
    var yoff = 0;
    //loadPixels();
    for (var y = 0; y < height; y++){
      var xoff = 0;
      for(var x = 0; x < width; x++){
        var r = map(noise(xoff, yoff)*255, 0, 1, -5, 5);
        var i = (x + y*width)*4
          fill(r);
          ellipse([i+0], [i+0], r, r);
        xoff += 0.01;
      }
      yoff += 0.01;
    }
    //updatePixels();
  }
  
}
