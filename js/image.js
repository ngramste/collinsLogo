
const totalFrames = 4800;
let counter = 0;
let record = false;

let particles;
let logo;

function setup() {
  frameRate(30);
  particles = new Array(250);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle((windowWidth / 100) * (windowHeight / 100));
  } 

  logo = new Logo(windowWidth / 10, windowWidth / 2.5, windowHeight / 2);
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
  logo = new Logo(windowWidth / 10, windowWidth / 2.5, windowHeight / 2);
}

function draw() {
  let percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function render(percent) {
  background(255);
  let a = percent * TWO_PI;
  for (let p of particles) {
    p.render(a);
  }  

  logo.display(a);
}
