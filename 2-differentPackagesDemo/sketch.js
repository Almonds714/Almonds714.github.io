// setInterval Demo

let ballArray=[];

function setup(){
  createCanvas(windowWidth, windowHeight);
  window.setInterval(addBall, 100);
}

function draw(){
  background("white");
  moveBall();
  checkIfHit();
  displayBalls();
}

function mousePressed(){
  // checkIfHit();
}

function checkIfHit(){
  for (let i=0; i<ballArray.length; i++){
    let distanceToMouse = dist(mouseX, mouseY, ballArray[i].x, ballArray[i].y);
    if (distanceToMouse<ballArray[i].radius){
      // ballArray[i].color="black";
      ballArray.splice(i, 1);
    }
  }
}

function moveBall(){
  for (let i=0; i<ballArray; i++){
    let dx = random(-10, -10);
    let dy = random(-10, -10);
    ballArray[i].x += dx;
    ballArray[i].y += dy;
  }
}

function displayBalls(){
  noStroke();
  for (let i=0; i<ballArray.length; i++){
    fill(ballArray[i].color);
    circle(ballArray[i].x, ballArray[i].y, ballArray[i].radius*2);
  }
}

function addBall(){
  let thisBall={
    x: random(width), 
    y: random(height), 
    radius: random(15, 25),
    color: color(random(255), random(255), random(255), random(255)),
  };
  ballArray.push(thisBall);
}