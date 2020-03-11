// Stacker: Mad Stax
// Brody Crawford
// February 25, 2020
//
// Extra for Experts: Adding background music, change with mouse wheel and SFX on cube placements
// - describe what you did to take this project "above and beyond"

// Known Bugs: None
// To Do; Create block placements using objects

// Global Variables

let cubeSize;
let cubeState;
let stackerY;
let stackerX;
let stackerDX;
let stackerSize;

// Play Functions. Setup and Draw loop.

function setup() {
  createCanvas(windowWidth, windowHeight);
  consoleInfo(); //Gives information into console from page, temporary...?
  stackerTicSpeed=millis();

  rectMode(CENTER);
  cubeSize=height/15; //Do not change later on
  stackerY=height;
  stackerX=width/2;

  stackerDX=5;

  cubeState="3Cubes";
  stackerSize=1;
}

function draw() {
  background(199, 251, 255); //nice blue color - 66, 75, 245.  Lighter blue color - 51, 246, 255.  Almost white, blue color - 199, 251, 255.
  drawCubeBackground(); 
  // initialStack();
  stack();
}


// Functions 

// function initialStack(){
//   // Draws first layer
//   fill(66, 75, 245);
//   for (let i=-1; i<2; i++){
//     rect(width/2+cubeSize*i, height-cubeSize/2, cubeSize, cubeSize);
//   }
//   stackerX=width/2-cubeSize*4;
// }

function stack(){
  fill(66, 75, 245);
  rect(stackerX, stackerY-cubeSize/2, cubeSize*3, cubeSize);

  // Move
  stackerX+=stackerDX;
  
  if (stackerX>width/2+cubeSize*3){
    stackerDX*=-1;
  }
  if (stackerX<width/2-cubeSize*3){
    stackerDX*=-1;
  }

  if (mouseIsClicked){
    stackerY+=cubeSize;
    mouseIsClicked=false;
  }
}

function mouseClicked(){
  mouseIsClicked=true;
}

function drawCubeBackground(){
  stroke(255);
  fill(0);

  for (let i=0; i<16; i++){
    for (let j=-4; j<5; j++){
      rect(width/2+cubeSize*j, height-cubeSize/2-cubeSize*i, cubeSize, cubeSize);
    }
  }
}

function consoleInfo(){
  console.log(windowWidth);
  console.log(windowHeight);
  console.log(windowHeight/15);
  console.log(stackerX);
}