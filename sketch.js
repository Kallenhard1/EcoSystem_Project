let ecoSystem;
let earth;
let wather;
let species;

function setup() {
  createCanvas(400, 400);
  //pixelDensity(1);
  ecosystem = new EcoSystem();
  earth = new Earth();
  wather = new Wather();
  species = new Species();
  
}

function draw() {
  
  
  
  earth.render();
}
