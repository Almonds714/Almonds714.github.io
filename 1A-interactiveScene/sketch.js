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

//Play Functions

function setup() {
  createCanvas(windowWidth, windowHeight);
  consoleInfo(); //Gives information into console from page, temporary...?
  rectMode(CENTER);
  cubeSize = height/15;
}

function draw() {
  background(66, 75, 245); //nice blue color - 66, 75, 245.  Lighter blue color - 51, 246, 255.  Almost white, blue color - 199, 251, 255.
  drawCubeBackground(); 
}

// Functions 

function drawCubeBackground(){
  noStroke();
  fill(51, 246, 255);
  // rect(width/2, height-cubeSize/2, cubeSize, cubeSize);
  // rect(width/2-cubeSize, height-cubeSize/2, cubeSize, cubeSize);
  // rect(width/2+cubeSize, height-cubeSize/2, cubeSize, cubeSize);

  // for (let i = )


  // for (let locationY = cubeSize*15; locationY < 0; locationY -= cubeSize){
  //   for (let locationX = cubeSize*-1; locationX < cubeSize*2; locationX += cubeSize){
  //     rect(width/2+locationX, height-cubeSize/2+locationY, cubeSize, cubeSize);
  //   }
  //   locationX = cubeSize*-1;
  // }

  // for (let locationX = cubeSize*-1; locationX < cubeSize*2; locationX += cubeSize){
  //   rect(width/2+locationX, height-cubeSize/2, cubeSize, cubeSize);
  // }

  stroke(0); //line in the middle for reference
  line(width/2, 0, width/2, height);
}

function consoleInfo(){
  console.log(windowWidth);
  console.log(windowHeight);
  console.log(windowHeight/15);
}