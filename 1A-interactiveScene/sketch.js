// Stacker: Mad Stax
// Brody Crawford
// February 25, 2020
//
// Extra for Experts: Adding background music, change with mouse wheel and SFX on cube placements
// - describe what you did to take this project "above and beyond"

// Known Bugs: squareSize doesn't want to exist

// Play Functions

function setup() {
  createCanvas(windowWidth, windowHeight);
  consoleInfo(); //Gives information into console from page, temporary...?
}

function draw() {
  background(66, 75, 245); //nice blue color 66, 75, 245
  cubeBackground();
}

// Functions 

function cubeBackground(){
  squareSize = width/15;
  noStroke();
  fill(51, 246, 255); //lighter blue color
  for (let i = 0; i < squareSize*3; i += squareSize){
    rect(width/2-i, height-squareSize, squareSize, squareSize); 
  }
}

// function drawSquare(){
//   fill(51, 246, 255); //lighter blue color
//   rect(width/2, height-60, 60, 60);
//   fill(199, 251, 255 ); //almost white blue color
//   ellipse(width/2+30, height-30, 60);
// }

function consoleInfo(){
  // eslint-disable-next-line no-undef
  console.log(windowWidth);
  // eslint-disable-next-line no-undef
  console.log(windowHeight);
}