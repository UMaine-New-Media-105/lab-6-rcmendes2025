const speed = 5;
const screen = 80;
let x = screen/2;
let y = screen/2;

let foodX, foodY;
let notEaten;


function setup() {
  createCanvas(400, 400);
  foodX = random(width)
  foodY = random(height)
  notEaten = true;
}

function draw() {
  background(140, 200, 60);
  funDog();
  dogTreat(foodX, foodY);
}

function funDog() {
  push();
  noStroke();
  translate(x, y);
  angleMode(DEGREES);
  fill("red")
  ellipse(0, 13, 35);
  fill("yellow")
  ellipse(0, 10, 8, 8);
  fill("gray");
  ellipse(0, 0, 50, 50);
  fill("lightgray")
  ellipse(0, 10, 25, 25);
  fill("black")
  ellipse(13, -2, 10, 10);
  ellipse(-13, -2, 10, 10);
  ellipse(0, 1, 8, 8);
  arc(0, 10, 15, 15, 30, 150);
  fill("lightgray")
  arc(10, -8, 40, 40, 280, 340);
  arc(-10, -8, 40, 40, 200, 260);
  pop();
  
  keyPressed();
}

function keyPressed() {
  if(keyCode === UP_ARROW && keyIsPressed) {
    y-=speed;
  }
  if(keyCode === DOWN_ARROW && keyIsPressed) {
    y+=speed;
  }
  if(keyCode === RIGHT_ARROW && keyIsPressed) {
    x+=speed;
  }
  if(keyCode === LEFT_ARROW && keyIsPressed) {
    x-=speed;
  }
}

function dogTreat(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("brown");
  rect(0, 0, 10, 20);
  ellipse(0, 0, 12);
  ellipse(10, 0, 12);
  ellipse(0, 20, 12);
  ellipse(10, 20, 12);
  pop();
}
