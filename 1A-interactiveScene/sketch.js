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

// Play Functions

function setup() {
  createCanvas(windowWidth, windowHeight);
  consoleInfo(); //Gives information into console from page, temporary...?
  rectMode(CENTER);
  cubeSize = height/15;
  noCursor();
}

function draw() {
  background(66, 75, 245); //nice blue color - 66, 75, 245.  Lighter blue color - 51, 246, 255.  Almost white, blue color - 199, 251, 255.
  drawCubeBackground(); 
}

// Functions 

function drawCubeBackground(){
  noStroke();
  fill(51, 246, 255);

  // Creates 3 squares at the bottom of the screen successfully but manually
  // rect(width/2, height-cubeSize/2, cubeSize, cubeSize);
  // rect(width/2-cubeSize, height-cubeSize/2, cubeSize, cubeSize);
  // rect(width/2+cubeSize, height-cubeSize/2, cubeSize, cubeSize);

  // for (let i=15; i>0; i--){
  //   rect(width/2, height-cubeSize/2, cubeSize, cubeSize);
  //   rect(width/2-cubeSize, height-cubeSize/2, cubeSize, cubeSize);
  //   rect(width/2+cubeSize, height-cubeSize/2, cubeSize, cubeSize);
  // }

  // Creates 3x15 squares through the middle of the screen unsuccessfully with 2 for loops
  // for (let locationY = cubeSize*15; locationY < 0; locationY -= cubeSize){
  //   for (let locationX = cubeSize*-1; locationX < cubeSize*2; locationX += cubeSize){
  //     rect(width/2+locationX, height-cubeSize/2+locationY, cubeSize, cubeSize);
  //   }
  //   locationX = cubeSize*-1;
  // } 

  // Creates 3 squares at the bottom of the screen successfully with a for loop
  // for (let locationX = cubeSize*-1; locationX < cubeSize*2; locationX += cubeSize){
  //   rect(width/2+locationX, height-cubeSize/2, cubeSize, cubeSize);
  // }

  //line in the middle for reference
  stroke(0);
  line(width/2, 0, width/2, height);
}

function consoleInfo(){
  console.log(windowWidth);
  console.log(windowHeight);
  console.log(windowHeight/15);
}