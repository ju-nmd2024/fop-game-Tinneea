function setup() {
  createCanvas(600, 750);
}
let gameState = "start";
let gravity = 0.1;
let speed = 0.5;
let groundY;

let x = 300;
let y = 100;

// cat function
function cat(x, y) {
  //face
  push();
  translate(x, y);
  fill(101, 73, 41);
  noStroke();
  ellipse(0, 0, 150, 110);
  triangle(-70, -100, -70, -10, -35, -40);
  triangle(60, -100, 30, -45, 69, -2);
  fill(188, 160, 129);
  triangle(-65, -80, -60, -25, -40, -30);
  triangle(55, -80, 35, -40, 56, -25);
  ellipse(0, 0, 140, 95);

  //eyes
  fill(0, 0, 0);
  ellipse(-40, 10, 30);
  ellipse(40, 10, 30);
  fill(255, 255, 255);
  ellipse(-35, 5, 10);
  ellipse(35, 5, 10);
  ellipse(-45, 12, 5);
  ellipse(45, 12, 5);

  //mouth
  fill(0, 0, 0);
  ellipse(0, 15, 10);
  pop();

  //body
  push();
  translate(x, y + 80);
  fill(101, 73, 41);
  noStroke();
  ellipse(0, 0, 50, 60);
  fill(188, 160, 129);
  ellipse(0, 0, 40, 50);

  //legs
  fill(101, 73, 41);
  ellipse(-15, 40, 20, 40);
  ellipse(15, 40, 20, 40);
  pop();

  //left arm
  push();
  translate(x, y + 80);
  angleMode(DEGREES);
  rotate(15);
  fill(101, 73, 41);
  noStroke();
  ellipse(-40, -10, 40, 20);
  pop();

  //right arm
  push();
  translate(x, y + 80);
  angleMode(DEGREES);
  rotate(-15);
  fill(101, 73, 41);
  noStroke();
  ellipse(40, -10, 40, 20);
  pop();

  //parachute
  push();
  translate(x, y - 230);
  strokeWeight(5);
  stroke(97, 101, 102);
  line(-55);
  fill(203, 150, 209, 95);
  angleMode(DEGREES);
  rotate(-180);
  arc(0, 0, 200, 200, PI, -902);
  strokeWeight(5);
  stroke(97, 101, 102);
  pop();

  push();
  translate(x, y + 80);
  strokeWeight(5);
  stroke(97, 101, 102);
  line(-55, -30, -100, -315);
  line(55, -30, 100, -315);
  pop();
}
// grass
function grass() {
  push();
  fill(133, 178, 138);
  noStroke();
  rect(1, 700, 600, 500);
  triangle(100, 760, 81, 670, 130, 750);
  triangle(120, 780, 120, 680, 150, 760);
  pop();
}
// cloud function
function cloud() {
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(203, 170, 70);
  ellipse(170, 200, 70);
  ellipse(240, 200, 70);
  ellipse(205, 205, 70);
  pop();
}

function startScreen() {
  noStroke();
  rect(200, 500, 200, 100);
  push();
  fill(203, 150, 209);
  textSize(27);
  text("START GAME", 212, 560);
  pop();
}

function gamePlay() {
  cat(x, y);
  if (keyIsDown(32)) {
    gravity = -0.3;
  } else {
    gravity = 0.3;
  }

  speed = speed + gravity;
  y = y + speed;

  if (y > 560 && speed <= 3) {
    gameState = "gameSucceeded";
  } else if (y > 560 && speed > 3) {
    gameState = "gameOver";
  }
}

function gameOver() {
  fill(203, 150, 209);
  textSize(20);
  text("YOU LOSE!", 155, 205);
}

function gameSucceeded() {
  fill(203, 150, 209);
  textSize(20);
  text("YOU WIN", 158, 205);
}

function reStart() {
  push();
  fill(255, 255, 255);
  noStroke();
  rect(200, 300, 200, 100);
  push();
  fill(203, 150, 209);
  textSize(27);
  text("RESTART", 235, 360);
  pop();
}

function draw() {
  background(214, 236, 247);
  cloud(x, y);
  grass(x, y);
  cat(x, y);

  if (gameState === "start") {
    startScreen();
  } else if (gameState === "playing") {
    gamePlay();
  } else if (gameState === "gameOver") {
    gameOver();
    reStart();
  } else if (gameState === "gameSucceeded") {
    gameSucceeded();
    reStart();
  }
}

function mouseClicked() {
  if (
    gameState === "start" &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 500 &&
    mouseY < 600
  ) {
    gameState = "playing";
    gravity = 0.1;
    speed = 0.5;
  } else if (
    gameState === "gameOver" &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 200 &&
    mouseY < 400
  ) {
    gameState = "start";
    gravity = 0.1;
    speed = 0.5;
    y = 100;
  } else if (
    gameState === "gameSucceeded" &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 200 &&
    mouseY < 400
  ) {
    gameState = "start";
    gravity = 0.1;
    speed = 0.5;
    y = 100;
  }
}
