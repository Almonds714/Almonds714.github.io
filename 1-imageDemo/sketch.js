// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let airpods;
let scalar = 0.1;

function preload(){
  airpods = loadImage("assets/airpods.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("lightblue");
  // rect(mouseX-50, mouseY-50, 100, 100);
  image(airpods, mouseX-scalar*airpods.width/2, mouseY-scalar*airpods.height/2, scalar*airpods.width, scalar*airpods.height);
}

function mouseWheel(event) {
  if (event.delta < 0){
    scalar *= 1.1;
  }
  else{
    scalar *= 0.9;
  }
  print(event.delta);
}