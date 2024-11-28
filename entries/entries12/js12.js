
function setup() {
    createCanvas(windowWidth, windowHeight);
  }


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

let circleBgcolor = {r: 255, g: 0, b:255};


function circleColor() {
    circleBgcolor.r = random(0, 255);
    circleBgcolor.g = random(0, 255);
    circleBgcolor.b = random(0, 255);
}


function draw() {
    noStroke();
    fill(circleBgcolor.r,circleBgcolor.g,circleBgcolor.b);
    ellipse(mouseX, mouseY, 90, 20);
}

function mousePressed() {
    clear();
    circleColor();
}