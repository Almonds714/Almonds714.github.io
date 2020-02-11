// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let airpods;

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
  image(airpods, mouseX, mouseY);
}
