// Stacker: Mad Stax
// Brody Crawford
// February 25, 2020
//
// Extra for Experts: Adding background music, change with mouse wheel and SFX on cube placements
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  consoleInfo(); //Gives information into console from page, temporary...?
}

function draw() {
  background(66, 75, 245);
}

function consoleInfo(){
  // eslint-disable-next-line no-undef
  console.log(windowWidth);
  // eslint-disable-next-line no-undef
  console.log(windowHeight);
}

function cubeBackground(){
  rect(windowHeight, windowWidth/7, 50, 50)
}