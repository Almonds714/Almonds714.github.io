// Stacker: Mad Stax
// Brody Crawford
// February 25, 2020
//
// Extra for Experts: Adding background music, change with mouse wheel and SFX on cube placements
// - describe what you did to take this project "above and beyond"

// Known Bugs: None
// To Do; Create for loop for cube background, make better looping and working for loop

// Global Variables

let cubeSize;
let locationX;
let placement;

// Play Functions

function setup() {
  createCanvas(windowWidth, windowHeight);
  consoleInfo(); //Gives information into console from page, temporary...?

  rectMode(CENTER);
  cubeSize = height/15; //Do not change later on
}

function draw() {
  background(199, 251, 255); //nice blue color - 66, 75, 245.  Lighter blue color - 51, 246, 255.  Almost white, blue color - 199, 251, 255.
  drawCubeBackground(); 
  stack();
}

// Functions 

function stack(){
  // Draws first layer
  fill(66, 75, 245);
  for (let i=-1; i<2; i++){
    rect(width/2+cubeSize*i, height-cubeSize/2, cubeSize, cubeSize);
  }

  
}

function drawCubeBackground(){
  stroke(255);
  fill(0);

  for (let i=0; i<16; i++){
    for (let x=-4; x<5; x++){
      rect(width/2+cubeSize*x, height-cubeSize/2-cubeSize*i, cubeSize, cubeSize);
    }
  }

  //line in the middle for reference
  // stroke(0);
  // line(width/2, 0, width/2, height);
}

function consoleInfo(){
  console.log(windowWidth);
  console.log(windowHeight);
  console.log(windowHeight/15);
}