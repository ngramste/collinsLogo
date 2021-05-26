class Radar {
  constructor (size, xpos, ypos) {
    this.size = size;
    this.xpos = xpos;
    this.ypos = ypos;
    this.ex = 0;
    this.ey = 0;
  }

  isHit (plane) {
    if(dist(plane.x, plane.y, this.ex, this.ey) + dist(plane.x, plane.y, this.xpos, this.ypos) - dist(this.ex, this.ey, this.xpos, this.ypos) < 0.05) {
      return true;
    } else {
      return false;
    }
  }

  display (offset) {
    ellipseMode(CENTER);
    noFill();
    strokeWeight(3);
    stroke(100);

    ellipse(this.xpos, this.ypos, this.size / 2, this.size / 2);
    ellipse(this.xpos, this.ypos, this.size, this.size);

    let angle = map(offset * 20 % TWO_PI, 0, TWO_PI, TWO_PI, 0);
    this.ex = cos(angle) * this.size * 2 + this.xpos;
    this.ey = sin(angle) * this.size * 2 + this.ypos;

    stroke(150);
    line(this.xpos, this.ypos, this.ex, this.ey);
  }
}