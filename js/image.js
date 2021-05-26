
const totalFrames = 4800;
let counter = 0;
let record = false;

let planes;
let logo;
let radar;
let touches = Array(0);

const airlines = ['UAL', 'AA', 'DL', 'DAL', 'SWA', 'FDX', 'UPS', 'FDX', 'AAL', 'ASH', 'ASA', 'ATN', 'NKS', 'CLU', 'AAY', 'SCX', 'ANZ', 'VTM'];

function setup() {
  frameRate(30);
  planes = new Array(35);
  createCanvas(windowWidth, windowHeight);
  logo = new Logo(windowWidth / 10, windowWidth / 3.5, windowHeight / 2);
  let pos = logo.getSpinnerCenter();
  radar = new Radar(Math.max(windowHeight, windowWidth), pos.x, pos.y);

  for (let i = 0; i < planes.length; i++) {
    let flight = airlines[Math.floor(random(airlines.length))] + Math.floor(random(1, 9999));
    planes[i] = new Plane(flight, Math.min(windowWidth / 100, windowHeight / 100));
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
  logo = new Logo(windowWidth / 10, windowWidth / 2.5, windowHeight / 2);
  let pos = logo.getSpinnerCenter();
  radar = new Radar(Math.max(windowHeight, windowWidth), pos.x, pos.y);
}

function draw() {
  let percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function mouseClicked() {
  // console.log("x", mouseX, "y", mouseY);
  let touch = new TouchPing(mouseX, mouseY);
  touches.push(touch);
}

function render(percent) {
  background(255);
  let a = percent * TWO_PI;

  radar.display(a);

  if (touches.length > 0) {
    for (let t of touches) {
      for (let p of planes) {
        if (t.isHit(p)) {
          p.startPing();
        }
      }
      if (t.size > windowWidth + windowHeight) {
        touches.shift();
      }
      t.growTouch();
      t.display();
    }
  }

  for (let p of planes) {
    if (radar.isHit(p)) {
      p.startPing();
    }
    p.display(a);
  }

  logo.display(a);
}
